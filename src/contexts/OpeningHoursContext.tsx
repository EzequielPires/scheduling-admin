import { useRouter } from "next/router";
import { createContext, useContext } from "react";
import { useNotification } from "../hooks/useNotification";
import { api } from "../services/api";

interface OpeningHours {
    id?: number;
    day: string;
	start: string;
	end: string;
}

interface OpeningHoursProps {
    find: () => Promise<any>;
    create: (data: OpeningHours) => Promise<void>;
    remove: (id: number) => Promise<void>;
}

const OpeningHoursContext = createContext({} as OpeningHoursProps);

const OpeningHoursProvider = ({children}) => {
    const notification = useNotification();
    const router = useRouter();

    const find = async () => {
        const openingHours = await api.get('opening-hours').then(res => res.data);
        return openingHours;
    }

    const create = async ({day, end, start}: OpeningHours) => {
        try {
            const res = await api.post('opening-hours', {day, end, start}).then(res => res.data);
            if(res.success) {
                notification.execute('success', 'Horário cadastrado com sucesso.');
            } else {
                notification.execute('danger', res.message);
            }
        } catch (error) {
            notification.execute('danger', error.message);
        }
    }

    const remove = async (id: number) => {
        try {
            const res = await api.delete(`opening-hours/${id}`).then(res => res.data);
            if(res.success) {
                notification.execute('success', 'Horário removido com sucesso.');
            } else {
                notification.execute('danger', res.message);
            }
        } catch (error) {
            notification.execute('danger', error.message);
        }
    }
    
    return (
        <OpeningHoursContext.Provider value={{
            find,
            create,
            remove
        }}>
            {children}
        </OpeningHoursContext.Provider>
    )
}

const useOpeningHours = () => {
    const context = useContext(OpeningHoursContext);

    return context;
}

export {
    useOpeningHours,
    OpeningHoursProvider
}