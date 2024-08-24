import { createContext } from "react";

export const CarrinhoContext= createContext();

export const CarrrinhoProvider = ({children}) => {
    return (
        <CarrinhoContext.Provider>
            {children}
        </CarrinhoContext.Provider>
    )
}