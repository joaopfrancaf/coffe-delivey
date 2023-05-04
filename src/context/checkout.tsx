import axios from "axios"
import { ReactNode, createContext, useEffect, useState } from "react"

export interface Coffe {
    id: number,
    name: string,
    type: 'TRADICIONAL' | 'GELADO' | 'COM LEITE' | 'ALCOÓLICO' | 'ESPECIAL',
    description: string,
    price: number,
    img: string
}

interface CoffeContext {
    coffes: Coffe[]
}

interface Checkout {
    product: Coffe[],
    amount: number
}

interface CheckoutContextProviderProps {
    children: ReactNode
}

export const CheckoutContext = createContext({} as CoffeContext)

export default function CheckoutContextProvider({ children }: CheckoutContextProviderProps) {
    const [coffes, setCoffes] = useState<Coffe[]>([])

    useEffect(() => {
        axios.get('http://localhost:5173/api/coffe').then((data) => {setCoffes(data.data)})
    },[])

    console.log(coffes)

    return (
        <CheckoutContext.Provider value={coffes}>
            {children}
        </CheckoutContext.Provider>
    )
} 