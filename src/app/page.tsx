import { fetchTodos } from './actions';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

export default async function Home() {
  const todos = await fetchTodos();

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">ToDoリスト</h1>
        <TodoForm />
        <ul className="space-y-3">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
        {todos.length === 0 && <p className="text-center text-gray-500 mt-4">タスクがありません。新しいタスクを追加してください。</p>}
      </div>
    </main>
  );
}
