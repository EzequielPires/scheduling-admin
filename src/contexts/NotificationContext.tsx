import { createContext, useContext, useState } from "react";
import { NotificationAside } from "../components/NotificationAside";

interface INotification {

}

interface INotificationContext {
    handleShowNotification: () => void;
}

const NotificationContext = createContext({} as INotificationContext);

function NotificationProvider({ children }) {
    const [show, setShow] = useState(false);
    const handleShowNotification = () => setShow(!show);
    return (
        <NotificationContext.Provider value={{
            handleShowNotification
        }}>
            {children}
            {show && <NotificationAside />}
        </NotificationContext.Provider>
    )
}

const useNotification = () => {
    const context = useContext(NotificationContext);
    return context;
}

export {
    useNotification,
    NotificationProvider
}