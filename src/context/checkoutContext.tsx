import { ReactNode, createContext, useState } from "react"
import { Coffe } from "./coffeContext"

export interface Checkout {
    product: Coffe
}

interface CheckoutContext {
    checkout: Checkout[]
    //setCheckout: React.Dispatch<React.SetStateAction<Checkout[]>> pode fazer dessa maneira ou a de baixo (fazendo um metodo para passar)
    SetCheckoutAdd: (checkout: Checkout) => void
    SetCheckoutRemove: (checkout: Checkout) => void
}

interface CheckoutContextProviderProps {
    children: ReactNode
}

export const CheckoutContext = createContext({} as CheckoutContext)

export default function CheckoutContextProvider({ children }: CheckoutContextProviderProps) {
    const [checkout, setCheckout] = useState<Checkout[]>([])

    function SetCheckoutAdd(obj: Checkout) {
        setCheckout(prevState => [...prevState, obj])
    }

    function SetCheckoutRemove(obj: Checkout) {
        //const newCheckout = checkout.filter((checkout) => {return checkout.product.id !== obj.product.id}) aqui n funfa pois remove todos
        //console.log(obj)
        //let newArray = checkout
        //const indexToRemove = checkout.indexOf(obj)
        //delete newArray[indexToRemove]
        //const newArr = checkout.filter((obj, index) => index !== indexToRemove);
        //console.log(newArray)
        //setCheckout(newArray)
        //tentativas locassas em cima, tudo isso pois o metodo que o chatgpt me deu só funfa com dados primitivos. com objetos é esse daqui:
        const indexToRemove = checkout.findIndex(x => x.product.id === obj.product.id)
        const newArr = checkout.filter((obj, index) => index !== indexToRemove);
        setCheckout(newArr)
    }

    return (
        <CheckoutContext.Provider value={{ checkout, SetCheckoutAdd, SetCheckoutRemove }}>{/*elentos que vao aqui tem que estar na interface CheckoutContext em cima (linha 9) */}
            {children}
        </CheckoutContext.Provider>
    )
}