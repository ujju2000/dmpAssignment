import { createContext , useState} from "react";


export const UserContext = createContext();

export function ContextProvider({children}) {
    let [isOpen, setIsOpen] = useState(false);
    return (
        <UserContext.Provider value = {{isOpen , setIsOpen}}>
            {children}
        </UserContext.Provider>
    )
}

