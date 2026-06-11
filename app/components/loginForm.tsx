'use client'

import { signIn } from "next-auth/react"

export default function LoginForm({ action }: { action: (e: React.FormEvent<HTMLFormElement>) => Promise<void> }) {
    return (
        <form className="flex flex-col items-center justify-center gap-2 bg-slate-700 p-4 rounded-lg shadow-md border border-gray-600"
            onSubmit={action}
        >
            <h1 className="text-2xl font-bold mb-4 text-white">Login</h1>
            <input
                type="text"
                placeholder="Username"
                name="username"
                className="border-2 border-gray-300 rounded-md p-2 bg-slate-700 text-white focus:border-blue-500 outline-none"
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                className="border-2 border-gray-300 rounded-md p-2 bg-slate-700 text-white focus:border-blue-500 outline-none"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600/70 text-white rounded-md p-2 cursor-pointer">
                Login
            </button>
            <button
                type="button"
                className="bg-red-500 hover:bg-red-600/70 text-white rounded-md p-2 cursor-pointer"
                onClick={() => signIn("google")}
            >
                Sign in with Google
            </button>
        </form>
    )
}