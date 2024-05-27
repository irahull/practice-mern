import React, { createContext, useContext } from 'react'

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
    const storeToken = (token) => {
        localStorage.setItem("token", token)
    }
    return <AppContext.Provider value={storeToken}>
        {children}
    </AppContext.Provider>
}

export const useContextValue = () => {
    return useContext(AppContext)
}