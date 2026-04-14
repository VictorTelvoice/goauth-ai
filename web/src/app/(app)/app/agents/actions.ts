'use server';

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getAgents() {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("No autorizado");
  }

  return await prisma.agent.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export async function createAgent(data: { name: string; phoneNumber?: string }) {
  const session = await auth();
  
  if (!session?.user?.id) {
    console.error("CreateAgent: No session user ID found");
    throw new Error("No autorizado - Sesión invitada o inválida");
  }

  try {
    const agent = await prisma.agent.create({
      data: {
        name: data.name,
        phoneNumber: data.phoneNumber || `+1${Math.floor(Math.random() * 9000000000 + 1000000000)}`,
        userId: session.user.id,
        status: 'active',
      },
    });

    revalidatePath('/app/agents');
    return agent;
  } catch (error: any) {
    console.error("Prisma Create Agent Error:", {
      userId: session.user.id,
      error: error.message,
      code: error.code,
      meta: error.meta
    });
    
    if (error.code === 'P2003') {
      throw new Error("Error de integridad: El usuario no existe en la base de datos. Por favor, cierra sesión y vuelve a entrar.");
    }
    
    throw new Error("No se pudo crear el agente: " + error.message);
  }
}

export async function deleteAgent(agentId: string) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("No autorizado");
  }

  // Verificar que el agente pertenece al usuario
  const agent = await prisma.agent.findUnique({
    where: { id: agentId },
  });

  if (!agent || agent.userId !== session.user.id) {
    throw new Error("No autorizado");
  }

  await prisma.agent.delete({
    where: { id: agentId },
  });

  revalidatePath('/app/agents');
}
