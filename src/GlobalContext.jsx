import React, { createContext, useState } from 'react'
import { toast } from 'sonner';

export const Context = createContext()

export default function Provider(props) {
    const [isActive, setIsActive] = useState(0);
    const handleUnavailable = () => {
        toast.info("I'm currently working on this project and It's not completed yet.")
    }
    return (
        <Context.Provider value={{ handleUnavailable, isActive, setIsActive }}>
            {props.children}
        </Context.Provider>
    )
}