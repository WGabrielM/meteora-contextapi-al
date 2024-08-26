import { createContext, useState } from "react";

export const CarrinhoContext= createContext();

export const CarrrinhoProvider = ({children}) => {
    const [carrinho, setCarrinho] = useState([]);
    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    )
}