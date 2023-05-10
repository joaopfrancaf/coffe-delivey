import { ReactNode, createContext, useState } from "react"
import { Coffe } from "./coffeContext"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export interface Checkout {
    product: Coffe
}

export interface Pedido {
    carrinho: Checkout[]
    endereco: CheckoutSchematype
}

interface CheckoutContext {
    checkout: Checkout[]
    apiResponse: Pedido[]
    //setCheckout: React.Dispatch<React.SetStateAction<Checkout[]>> pode fazer dessa maneira ou a de baixo (fazendo um metodo para passar)
    SetCheckoutAdd: (checkout: Checkout) => void
    SetCheckoutRemove: (checkout: Checkout) => void
    CheckoutReducerProducts: () => Checkout[]
    QuantidadeProdutosNoCarrinho: (obj: Checkout) => number
    QuantidadeDeCafes: (obj: Coffe) => number
    Submit: (data: any) => void
    RemoveItem: (obj: Coffe) => void
}

interface CheckoutContextProviderProps {
    children: ReactNode
}

interface CheckoutSchematype {
    CEP: number,
    rua: string,
    numero: number,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string,
    pagamento: 'CARTAO_DE_CREDITO' | 'CARTAO_DE_DEBITO' | "DINHEIRO"
    carrinho: Checkout
}

/*enum Pagamentos {
    CARTAO_DE_CREDITO = 'CARTAO_DE_CREDITO',
    CARTAO_DE_DEBITO = "CARTAO_DE_DEBITO",
    DINHEIRO = "DINHEIRO",
}*/

export const CheckoutContext = createContext({} as CheckoutContext)

export default function CheckoutContextProvider({ children }: CheckoutContextProviderProps) {
    const [checkout, setCheckout] = useState<Checkout[]>([])
    const [apiResponse, setApiResponse] = useState<Pedido[]>([])
    const navigate = useNavigate();

    function SetCheckoutAdd(obj: Checkout) {
        setCheckout(prevState => [...prevState, obj])
    }

    function SetCheckoutRemove(obj: Checkout) {
        //tentativas locassas, tudo isso pois o metodo que o chatgpt me deu só funfa com dados primitivos. com objetos é esse daqui:
        const indexToRemove = checkout.findIndex(x => x.product.id === obj.product.id)
        const newArr = checkout.filter((_obj, index) => index !== indexToRemove);
        setCheckout(newArr)
    }

    function CheckoutReducerProducts() {
        const produtosUnicos = checkout.filter((produto, index) => {
            return index === checkout.findIndex(p => p.product.id === produto.product.id);
        });

        return produtosUnicos
    }

    function QuantidadeProdutosNoCarrinho(obj: Checkout) {
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

    function RemoveItem(obj: Coffe) {
        const newArray = checkout.filter(x => {
            return x.product.id !== obj.id;
        })

        setCheckout(newArray)
    }

    async function Submit(data: CheckoutSchematype) {
        if (checkout.length) {
            const pedido: Pedido = {
                carrinho: checkout,
                endereco: data,
            }

            const response = await axios.post('http://localhost:5173/api/coffe', pedido)

            setApiResponse(response.data)

            if (response.status === 201) {
                navigate("success")
                setCheckout([])
            }
        }
    }

    return (
        <CheckoutContext.Provider value={{ checkout, SetCheckoutAdd, SetCheckoutRemove, CheckoutReducerProducts, QuantidadeProdutosNoCarrinho, QuantidadeDeCafes, Submit, apiResponse, RemoveItem }}>{/*elentos que vao aqui tem que estar na interface CheckoutContext em cima (linha 9) */}
            {children}
        </CheckoutContext.Provider>
    )
}