import React, { createContext, useState } from 'react'

export const Context = createContext()

export default function Provider(props) {
    const [isActive, setIsActive] = useState(0);
    const handleUnavailable = () => {
        alert("This feature is currently Unavailable :(")
    }
    return (
        <Context.Provider value={{ handleUnavailable, isActive, setIsActive }}>
            {props.children}
        </Context.Provider>
    )
}