import axios from "axios"
import { ReactNode, createContext, useEffect, useState } from "react"

export interface Coffe {
    id: string,
    name: string,
    type: [],
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
        const response = await axios.get('coffe-deliveryjavaspring-production.up.railway.app/coffe')
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