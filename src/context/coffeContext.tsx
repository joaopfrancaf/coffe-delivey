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

interface CoffeContextProviderProps {
    children: ReactNode
}

export const CoffeContext = createContext({} as CoffeContext)

export default function CoffeContextProvider({ children }: CoffeContextProviderProps) {
    const [coffes, setCoffes] = useState<Coffe[]>([])

    async function FetchApi() {
        const response = await axios.get('http://localhost:5173/api/coffe')
        setCoffes(response.data)
    }

    useEffect(() => {
        FetchApi()
    }, [])

    return (
        <CoffeContext.Provider value={{ coffes }}>
            {children}
        </CoffeContext.Provider>
    )
} 