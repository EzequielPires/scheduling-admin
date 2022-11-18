import {useState, useEffect, createContext, useContext} from "react";

interface AsideContextProps {
    show: boolean;
    handleShow: () => void;
}

const AsideContext = createContext({} as AsideContextProps);

const AsideProvider = ({children}) => {
    const [show, setShow] = useState(true);

    const handleShow = () => setShow(!show);

    useEffect(() => {
        if(window.innerWidth < 1400) setShow(false);
    }, [])

    return (
        <AsideContext.Provider value={{
            show,
            handleShow
        }}>
            {children}
        </AsideContext.Provider>
    )
}

const useAside = () => {
    const context = useContext(AsideContext);
    return context;
}

export {useAside, AsideProvider}