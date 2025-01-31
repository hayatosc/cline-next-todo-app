'use client';

import { updateTodoStatus, removeTodo } from '../actions';
import { Todo } from '@/lib/db';

export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <li className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
      <input type="checkbox" checked={todo.completed} onChange={() => updateTodoStatus(todo.id)} className="h-5 w-5 text-blue-500" />
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)} className="text-red-500 hover:text-red-700 focus:outline-none">
        削除
      </button>
    </li>
  );
}
