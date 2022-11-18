import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { useRouter } from "next/router";
import { useNotification } from "../hooks/useNotification";

interface IUser {
    id?: string;
    name?: string;
    email: string;
    password?: string;
    avatar?: string;
}

interface AuthContext {
    user: IUser;
    signIn(email: string, password: string): Promise<boolean>;
    signOut(): void;
}

const AuthContext = createContext({} as AuthContext);

function AuthProvider({ children }) {
    const notification = useNotification();
    const router = useRouter();
    const [user, setUser] = useState<IUser>(null);

    useEffect(() => {
        const { 'ag.token': token, 'ag.user': user } = parseCookies();
        if (token && user) {
            setUser(JSON.parse(user));
        }
    }, []);

    const setAuthCookie = (name: string, data: string) => {
        setCookie(undefined, name, data, { maxAge: 60 * 60 * 1, path: '/', })
    }

    const signIn = async (email: string, password: string) => {
        try {
            const response = await api.post('auth/admin', {
                email,
                password
            }).then(res => res.data);
            if (response.success) {
                setAuthCookie('ag.token', response.token);
                api.defaults.headers['Authorization'] = `Bearer ${response.token}`;
                setAuthCookie('ag.user', JSON.stringify(response.user));
                setUser(response.user);
                router.push('/admin');
                return true;
            } else {
                notification.execute('danger', `Senha ou email incorretos.`);
            }
        } catch (error) {
            notification.execute('danger', `Senha ou email incorretos.`);
        }
    }
    
    const signOut = () => {
        setUser(null);
        destroyCookie(undefined, 'ag.token');
        destroyCookie(undefined, 'ag.user');
        router.push('/login');
    }

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}

export {
    useAuth,
    AuthProvider
}