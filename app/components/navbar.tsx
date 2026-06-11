'use client'

import { Sun } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Navbar() {
    const { data: session } = useSession()

    return (
        <nav className="bg-slate-900 border-b border-slate-700 shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-white cursor-pointer">
                    MyApp
                </h1>

                {/* Nav Links */}
                <ul className="flex items-center gap-8 text-slate-300 font-medium">
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">
                        Home
                    </li>
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">
                        About
                    </li>
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">
                        Contact
                    </li>
                </ul>

                <button>
                    <Sun color="white" size={24} />
                </button>

                {/* Auth Button */}
                {session ? (
                    <button
                        onClick={() => signOut({ callbackUrl: "/login" })}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                    >
                        Sign Out
                    </button>
                ) : (
                    <button
                        onClick={() => signIn("google")}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                    >
                        Sign In
                    </button>
                )}
            </div>
        </nav>
    )
}