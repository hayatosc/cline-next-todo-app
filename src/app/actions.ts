'use server';

import { revalidatePath } from 'next/cache';
import { getAllTodos, addTodo, toggleTodo, deleteTodo } from '@/lib/db';

export async function fetchTodos() {
  return getAllTodos();
}

export async function createTodo(text: string) {
  const todo = addTodo(text);
  revalidatePath('/');
  return todo;
}

export async function updateTodoStatus(id: number) {
  toggleTodo(id);
  revalidatePath('/');
}

export async function removeTodo(id: number) {
  deleteTodo(id);
  revalidatePath('/');
}
