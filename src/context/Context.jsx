import { createContext, useState } from "react";
import { data } from "../PropDrilling/data";


// create the context/data-layer

export const AppContext = createContext();

// create the provider

export const AppProvider = ({ children }) => {

    const [items, setItems] = useState(data)


    const removePerson = (id) => {
        const newPeople = items.filter((item) => {
            return item.id !== id
        })
        setItems(newPeople)
    }

    return <AppContext.Provider value={{
        items,
        setItems,
        removePerson
    }}>
        {children}
    </AppContext.Provider>
}