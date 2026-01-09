'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    isLoading: boolean;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Usuarios de ejemplo (en producción esto vendría de una API)
const mockUsers = [
    { id: '1', name: 'Juan Pérez', email: 'juan@example.com', password: '123456' },
    { id: '2', name: 'María García', email: 'maria@example.com', password: '123456' },
    { id: '3', name: 'Carlos López', email: 'carlos@example.com', password: '123456' },
    { id: '4', name: 'Ana Martínez', email: 'ana@example.com', password: '123456' },
];

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Verificar si hay un usuario guardado en localStorage
        const savedUser = localStorage.getItem('quiniela_user');
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (error) {
                localStorage.removeItem('quiniela_user');
            }
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        // Simular delay de API
        await new Promise(resolve => setTimeout(resolve, 500));

        const foundUser = mockUsers.find(
            u => u.email === email && u.password === password
        );

        if (foundUser) {
            const userData: User = {
                id: foundUser.id,
                name: foundUser.name,
                email: foundUser.email,
            };
            setUser(userData);
            localStorage.setItem('quiniela_user', JSON.stringify(userData));
            return true;
        }

        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('quiniela_user');
        router.push('/login');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isLoading,
                isAuthenticated: !!user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

