import { useRouter } from 'next/router';
import { createContext, useContext } from 'react';
import { useNotification } from '../hooks/useNotification';
import { api } from '../services/api';

interface ICustomers {
    id?: string;
    name: string;
    email: string;
    password?: string;
    phone: string;
}

interface CustomersProps {
    create: (data: ICustomers) => Promise<void>;
    update: (data: ICustomers) => Promise<void>;
    remove: (id: string) => Promise<ICustomers[]>;
}

const CustomersContext = createContext({} as CustomersProps);

const CustomersProvider = ({ children }) => {
    const notification = useNotification();
    const router = useRouter();

    const create = async ({ name, email, phone, password }: ICustomers) => {
        try {
            const res = await api.post('user', {name, email, password, phone}).then(res => res.data);
            if(res.success) {
                notification.execute('success', `Cliente adicionado com sucesso.`);
                router.push('/admin/clientes');
            } else {
                notification.execute('danger', res.message);
            }
        } catch (error) {
            notification.execute('danger', error.message);
        }
    }
    
    const update = async ({ id, name, email, phone, password }: ICustomers) => {
        try {
            const res = await api.patch(`user/${id}`, {name, email, password, phone}).then(res => res.data);
            if(res.success) {
                notification.execute('success', `Cliente atualizado com sucesso.`);
                router.push('/admin/clientes');
            } else {
                notification.execute('danger', res.message);
            }
        } catch (error) {
            notification.execute('danger', error.message);
        }
    }

    const remove = async (id: string) => {
        await api.delete(`user/${id}`);
        const users = await api.get(`user`).then(res => res.data);
        return users;
    }

    return (
        <CustomersContext.Provider value={{
            create,
            update,
            remove
        }}>
            {children}
        </CustomersContext.Provider>
    )
}

const useCustomers = () => {
    const context = useContext(CustomersContext);

    return context;
}

export { useCustomers, CustomersProvider }