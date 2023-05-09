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
    CalcAmount: () => Checkout[]
    CalcQuantidadeProdutos: (obj: Checkout) => number
    QuantidadeDeCafes: (obj: Coffe) => number
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
        //tentativas locassas, tudo isso pois o metodo que o chatgpt me deu só funfa com dados primitivos. com objetos é esse daqui:
        const indexToRemove = checkout.findIndex(x => x.product.id === obj.product.id)
        const newArr = checkout.filter((obj, index) => index !== indexToRemove);
        setCheckout(newArr)
    }

    function CalcAmount() {
        const produtosUnicos = checkout.filter((produto, index) => {
            return index === checkout.findIndex(p => p.product.id === produto.product.id);
        });

        return produtosUnicos
    }

    function CalcQuantidadeProdutos(obj: Checkout) {
        const occurrences = checkout.reduce((acc, curret) => {
            if (curret.product.id === obj.product.id) {
                acc++
            }
            return acc
        }, 0);

        return occurrences
    }

    function QuantidadeDeCafes(obj: Coffe) {
        const occurrences = checkout.reduce((acc, curret) => {
            if (curret.product.id === obj.id) {
                acc++
            }
            return acc
        }, 0);

        return occurrences
    }

    return (
        <CheckoutContext.Provider value={{ checkout, SetCheckoutAdd, SetCheckoutRemove, CalcAmount, CalcQuantidadeProdutos, QuantidadeDeCafes }}>{/*elentos que vao aqui tem que estar na interface CheckoutContext em cima (linha 9) */}
            {children}
        </CheckoutContext.Provider>
    )
}