'use client'
import { Trash2 } from "lucide-react";
import { useState } from "react";

interface Todo {
    id: number,
    name: string,
    isCompleted: boolean
}

export default function TodoPage() {

    const [todos, setTodos] = useState<Todo[]>([]);
    const addTodo = (e: any) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formdata = new FormData(form);
        const todo = formdata.get("todo") as string;

        setTodos(prev => [
            ...prev,
            {
                id: Date.now(),
                name: todo,
                isCompleted: false
            }
        ])
        form.reset()
    }

    const toggleTodo = (id: number) => {
        setTodos(prev => (
            prev.map(todo => (
                todo.id === id ? { 
                    ...todo, isCompleted: !todo.isCompleted
                } : todo
            ))
        ))
    }

    const deleteTodo = (id: number) => {
        setTodos(prev => (prev.filter(todo => todo.id !== id)))
    }

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-5">
            <div className="w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl">

                <h1 className="text-3xl font-bold text-center text-white mb-6">
                    Todo App ✨
                </h1>

                <form onSubmit={addTodo} className="flex gap-3 mb-6">
                    <input
                        type="text"
                        name="todo"
                        placeholder="Add a new task..."
                        className="flex-1 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-slate-500"
                    />

                    <button
                        type="submit"
                        className="px-5 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
                    >
                        Add
                    </button>
                </form>

                <div className="space-y-3">

                    {todos.length === 0 && (
                        <div className="text-center text-slate-500 py-10">
                            No todos yet 👀
                        </div>
                    )}

                    {todos.map((item) => (
                        <div
                            key={item.id}
                            className="group rounded-2xl bg-slate-800 p-4 border border-slate-700 hover:border-slate-600 transition"
                        >
                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                    <input
                                        type="checkbox"
                                        checked={item.isCompleted}
                                        onChange={() => toggleTodo(item.id)}
                                        className="h-5 w-5 cursor-pointer accent-green-500"
                                    />

                                    <span
                                        className={`text-lg transition ${item.isCompleted
                                            ? "line-through text-slate-500"
                                            : "text-white"
                                            }`}
                                    >
                                        {item.name}
                                    </span>

                                </div>

                                <button
                                    onClick={() => deleteTodo(item.id)}
                                    className="p-2 rounded-full hover:bg-red-500/20 transition"
                                >
                                    <Trash2
                                        size={18}
                                        className="text-red-400"
                                    />
                                </button>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}