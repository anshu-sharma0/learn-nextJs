'use client'

import { useState } from "react";
import LoginForm from "../components/loginForm";
import { useSession } from "next-auth/react";

export default function LoginPage() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const { data: session } = useSession()

    async function action(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const username = formData.get("username") as string;
        const password = formData.get("password") as string;

        setCredentials({ username, password });
    }

    return <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800">
        <LoginForm action={action} />
        {credentials.username && <div>
            <p>Username: {credentials.username}</p>
            <p>Password: {credentials.password}</p>
        </div>
        }
        {
            session ? (
                <div>
                    <p>Name: {session.user?.name}</p>
                    <p>Email: {session.user?.email}</p>
                    <p>Image: {session.user?.image}</p>
                </div>
            ) : null
        }
    </div>;
}
