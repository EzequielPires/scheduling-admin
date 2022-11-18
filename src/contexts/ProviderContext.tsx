import { useRouter } from 'next/router';
import { createContext, useContext } from 'react';
import { useNotification } from '../hooks/useNotification';
import { api } from '../services/api';

interface IProvider {
    id?: string;
    name: string;
    email: string;
    password?: string;
    phone: string;
    services?: Array<any>;
}

interface ProviderProps {
    create: (data: IProvider) => Promise<void>;
    update: (data: IProvider) => Promise<void>;
    remove: (id: string) => Promise<IProvider[]>;
}

const ProviderContext = createContext({} as ProviderProps);

const ProviderProvider = ({ children }) => {
    const notification = useNotification();
    const router = useRouter();

    const create = async ({ name, email, phone, password }: IProvider) => {
        try {
            const res = await api.post('provider', {name, email, password, phone}).then(res => res.data);
            if(res.success) {
                notification.execute('success', `Especialista adicionado com sucesso.`);
                router.push('/admin/especialistas');
            } else {
                notification.execute('danger', res.message);
            }
        } catch (error) {
            notification.execute('danger', error.message);
        }
    }

    const update = async ({ id, name, email, phone, password, services }: IProvider) => {
        try {
            const res = await api.patch(`provider/${id}`, {name, email, password, phone, services}).then(res => res.data);
            if(res.success) {
                notification.execute('success', `Especialista adicionado com sucesso.`);
                router.push('/admin/especialistas');
            } else {
                notification.execute('danger', res.message);
            }
        } catch (error) {
            notification.execute('danger', error.message);
        }
    }

    const remove = async (id: string) => {
            await api.delete(`service/${id}`);
            const services = await api.get(`service`).then(res => res.data);
            return services;
    }

    return (
        <ProviderContext.Provider value={{
            create,
            update,
            remove
        }}>
            {children}
        </ProviderContext.Provider>
    )
}

const useProvider = () => {
    const context = useContext(ProviderContext);

    return context;
}

export { useProvider, ProviderProvider }