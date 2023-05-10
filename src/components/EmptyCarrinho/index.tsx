import { DivEmptyCarrinho } from "./styles";
import { ShoppingCartSimple } from "@phosphor-icons/react"

export default function EmptyCard() {
    return (
        <DivEmptyCarrinho>
            <ShoppingCartSimple size={28} />
        </DivEmptyCarrinho>
    )
}