'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Image from 'next/image';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        let response = await res.json()

        if (res.ok) {
            router.push('/admin'); // Redirigir a la página de inicio después del inicio de sesión exitoso
        } else {
            setError(response.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#881a1a] text-white">
             <div className="bg-gray-200 p-10 rounded-xl shadow-lg w-full max-w-md mx-4">
                <div className="text-center flex justify-center mb-6">
                    <Image alt="ligaCubb" width={150} height={60} src="/logos/logocubb.png" />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
}
