import Database from 'better-sqlite3';
import { join } from 'path';

const db = new Database(join(process.cwd(), 'todos.db'));

// テーブルの作成
db.exec(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT 0
  )
`);

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export function getAllTodos(): Todo[] {
  return db.prepare('SELECT * FROM todos').all() as Todo[];
}

export function addTodo(text: string): Todo {
  const stmt = db.prepare('INSERT INTO todos (text, completed) VALUES (?, 0)');
  const result = stmt.run(text);
  return {
    id: result.lastInsertRowid as number,
    text,
    completed: false,
  };
}

export function toggleTodo(id: number): void {
  db.prepare('UPDATE todos SET completed = NOT completed WHERE id = ?').run(id);
}

export function deleteTodo(id: number): void {
  db.prepare('DELETE FROM todos WHERE id = ?').run(id);
}
