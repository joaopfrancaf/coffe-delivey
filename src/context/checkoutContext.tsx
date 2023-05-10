import { ReactNode, createContext, useState } from "react"
import { Coffe } from "./coffeContext"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export interface Checkout {
    product: Coffe[]
}

export interface Pedido {
    carrinho: Checkout
    endereco: Enderecotype
}

interface CheckoutContext {
    checkout: Checkout
    apiResponsePedido: Pedido
    //setCheckout: React.Dispatch<React.SetStateAction<Checkout[]>> pode fazer dessa maneira ou a de baixo (fazendo um metodo para passar)
    SetCheckoutAdd: (checkout: Coffe) => void
    SetCheckoutRemove: (checkout: Coffe) => void
    CheckoutReducerProducts: () => Coffe[]
    QuantidadeProdutosNoCarrinho: (obj: Coffe) => number
    QuantidadeDeCafes: (obj: Coffe) => number
    Submit: (data: any) => void
    RemoveItem: (obj: Coffe) => void
}

interface CheckoutContextProviderProps {
    children: ReactNode
}

interface Enderecotype {
    CEP: number,
    rua: string,
    numero: number,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string,
    pagamento: 'CARTAO_DE_CREDITO' | 'CARTAO_DE_DEBITO' | "DINHEIRO"
}

/*enum Pagamentos {
    CARTAO_DE_CREDITO = 'CARTAO_DE_CREDITO',
    CARTAO_DE_DEBITO = "CARTAO_DE_DEBITO",
    DINHEIRO = "DINHEIRO",
}*/

export const CheckoutContext = createContext({} as CheckoutContext)

export default function CheckoutContextProvider({ children }: CheckoutContextProviderProps) {
    const [checkout, setCheckout] = useState<Checkout>({
        product: []
    })
    const [apiResponsePedido, setApiResponsePedido] = useState<Pedido>({
        carrinho: {
            product: []
        },
        endereco: {
            bairro: "",
            CEP: 0,
            cidade: "",
            complemento: "",
            numero: 0,
            pagamento: 'CARTAO_DE_CREDITO',
            rua: "",
            uf: ''
        }
    })
    const navigate = useNavigate();

    function SetCheckoutAdd(obj: Coffe) {
        setCheckout(prevState => {
            return {
                product: [...prevState.product, obj]
            }
        })
    }

    function SetCheckoutRemove(obj: Coffe) {
        //tentativas locassas, tudo isso pois o metodo que o chatgpt me deu só funfa com dados primitivos. com objetos é esse daqui:
        const indexToRemove = checkout.product.findIndex(x => x.id === obj.id)
        const newArr = checkout.product.filter((_obj, index) => index !== indexToRemove);
        setCheckout(_old => {
            return {
                product: newArr
            }
        })
    }

    function CheckoutReducerProducts() {
        const produtosUnicos = checkout.product.filter((produto, index) => {
            return index === checkout.product.findIndex(p => p.id === produto.id);
        });

        return produtosUnicos
    }

    function QuantidadeProdutosNoCarrinho(obj: Coffe) {
        const occurrences = checkout.product.reduce((acc, curret) => {
            if (curret.id === obj.id) {
                acc++
            }
            return acc
        }, 0);

        return occurrences
    }

    function QuantidadeDeCafes(obj: Coffe) {
        const occurrences = checkout.product.reduce((acc, curret) => {
            if (curret.id === obj.id) {
                acc++
            }
            return acc
        }, 0);

        return occurrences
    }

    function RemoveItem(obj: Coffe) {
        const newArray = checkout.product.filter(x => {
            return x.id !== obj.id;
        })

        setCheckout(_old => {
            return {
                product: newArray
            }
        })
    }

    async function Submit(enderecoData: Enderecotype) {
        if (checkout.product.length) {
            const pedido: Pedido = {
                carrinho: checkout,
                endereco: enderecoData,
            }

            const response = await axios.post('http://localhost:5173/api/coffe', pedido)

            setApiResponsePedido(response.data)

            if (response.status === 201) {
                navigate("success")
            }
        }
    }

    return (
        <CheckoutContext.Provider value={{ checkout, SetCheckoutAdd, SetCheckoutRemove, CheckoutReducerProducts, QuantidadeProdutosNoCarrinho, QuantidadeDeCafes, Submit, apiResponsePedido, RemoveItem }}>{/*elentos que vao aqui tem que estar na interface CheckoutContext em cima (linha 9) */}
            {children}
        </CheckoutContext.Provider>
    )
}