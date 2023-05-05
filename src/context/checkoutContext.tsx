import { ReactNode, createContext, useState } from "react"
import { Coffe } from "./coffeContext"

export interface Checkout {
    product: Coffe
    amount: number
}

interface CheckoutContext {
    checkout: Checkout[]
    //setCheckout: React.Dispatch<React.SetStateAction<Checkout[]>> pode fazer dessa maneira ou a de baixo
    SetCheckout: (checkout: Checkout) => void
}

interface CheckoutContextProviderProps {
    children: ReactNode
}

export const CheckoutContext = createContext({} as CheckoutContext)

export default function CheckoutContextProvider({ children }: CheckoutContextProviderProps) {
    const [checkout, setCheckout] = useState<Checkout[]>([])

    function SetCheckout(x: Checkout) {
        setCheckout(prevState => [...prevState, x])
    }

    return (
        <CheckoutContext.Provider value={{ checkout, SetCheckout }}>{/*elentos que vao aqui tem que estar na interface CheckoutContext em cima (linha 9) */}
            {children}
        </CheckoutContext.Provider>
    )
}