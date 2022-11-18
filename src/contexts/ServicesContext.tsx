import { useRouter } from 'next/router';
import { createContext, useContext } from 'react';
import { useNotification } from '../hooks/useNotification';
import { api } from '../services/api';

interface IService {
    id?: string;
    name: string;
    description: string;
    duration: string;
    price: string;
}

interface ServicesProps {
    create: (data: IService) => Promise<void>;
    update: (data: IService) => Promise<void>;
    remove: (id: string) => Promise<any>;
}

const ServicesContext = createContext({} as ServicesProps);

const ServicesProvider = ({ children }) => {
    const notification = useNotification();
    const router = useRouter();

    const create = async ({ name, description, duration, price }: IService) => {
        try {
            const res = await api.post('service', {name, description, duration, price}).then(res => res.data);
            if(res.success) {
                notification.execute('success', `Serviço adicionado com sucesso.`);
                router.push('/admin/servicos');
            } else {
                notification.execute('danger', res.message);
            }
        } catch (error) {
            notification.execute('danger', error.message);
        }
    }

    const update = async ({ id, name, description, duration, price }: IService) => {
        try {
            const res = await api.patch(`service/${id}`, {name, description, duration, price}).then(res => res.data);
            if(res.success) {
                notification.execute('success', `Serviço atualizado com sucesso.`);
                router.push('/admin/servicos');
            } else {
                notification.execute('danger', res.message);
            }
        } catch (error) {
            notification.execute('danger', error.message);
        }
    }

    const remove = async (id: string) => {
        try {
            const res = await api.delete(`service/${id}`).then(res => res.data);
            if(res.success) {
                notification.execute('success', `Serviço removido com sucesso.`);
            } else {
                notification.execute('danger', res.message);
            }
        } catch (error) {
            notification.execute('danger', error.message);
        } finally {
            const services = await api.get(`service`).then(res => res.data);
            return services;
        }
    }

    return (
        <ServicesContext.Provider value={{
            create,
            update,
            remove
        }}>
            {children}
        </ServicesContext.Provider>
    )
}

const useServices = () => {
    const context = useContext(ServicesContext);

    return context;
}

export { useServices, ServicesProvider }