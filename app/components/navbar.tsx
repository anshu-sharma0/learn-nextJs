'use client'

import { Moon, Star, Sun } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function Navbar() {
    const { data: session } = useSession()
    const { theme, setTheme } = useTheme()
    const handleTheme1 = () => {
        setTheme("dark");
    }
    const handleTheme2 = () => {
        setTheme("light");
    }

    console.log({ theme })

    return (
        <nav className="bg-slate-900 border-b border-slate-700 shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-white cursor-pointer">
                    MyApp
                </h1>

                {/* Nav Links */}
                <ul className="flex items-center gap-8 text-slate-300 font-medium">
                    <Link href="/">
                        <li className="hover:text-blue-400 cursor-pointer transition-colors">
                            Home
                        </li>
                    </Link>
                    <Link href="/faq">
                        <li className="hover:text-blue-400 cursor-pointer transition-colors">
                            FAQ
                        </li>
                    </Link>
                    <Link href="/todo">
                        <li className="hover:text-blue-400 cursor-pointer transition-colors">
                            Todo
                        </li>
                    </Link>
                </ul>

                <button className="flex gap-2">
                    {theme == "light" ? <Sun color="white" size={24} onClick={handleTheme1} className="cursor-pointer" />
                        : <Moon color="white" size={24} onClick={handleTheme2} className="cursor-pointer" />}
                </button>

                {/* Auth Button */}
                {/* {session ? (
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
                )} */}
            </div>
        </nav>
    )
}