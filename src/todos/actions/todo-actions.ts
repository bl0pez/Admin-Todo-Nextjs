'use server'
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const toggleTodo = async(id: string, complete: boolean): Promise<Todo> => {

    const todo = await prisma.todo.findFirst({ where: { id }});

    if (!todo) throw `Todo with id ${id} not found`;

    const updatedTodo = await prisma.todo.update({
        where: { id },
        data: { complete}
    });

    revalidatePath('/api/server-todos');
    return updatedTodo;

}

export const addTodo = async ( description: string) => {
  try {

    const todo = await prisma.todo.create({ data: { description } });
    revalidatePath('/api/server-todos');
    return todo;
  } catch (error: any) {
    return {
        message: 'Error al crear el todo'
    }
  }
}

export const deleteCompleted = async(): Promise<void> => {
    await prisma.todo.deleteMany({
      where: {
        complete: true
      }
    });

    revalidatePath('/api/server-todos');
    return;
}