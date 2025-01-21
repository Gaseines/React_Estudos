import { createContext } from "react";

export const SomeContext = createContext()

export const HookUseContext = ({ children }) =>{
    const contextValue = "testing context"

    return(
        <SomeContext value={{contextValue}}>
            {children}
        </SomeContext>
    )
}