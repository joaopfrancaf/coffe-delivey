import { ButtonWraper, DivButtonChange, DivCarrinhoItem, DivDescricao, DivMorebuttons, DivRemoveButton, DivTitulo } from "./style";
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { Checkout, CheckoutContext } from "../../context/checkoutContext";
import { useContext } from "react";

export default function Carrinho({ ...Props }: Checkout) {
    const { checkout } = useContext(CheckoutContext)

    return (
        <DivCarrinhoItem>
            <img src={Props.product.img} width={64} />
            <DivDescricao >
                <DivTitulo>
                    <p>{Props.product.name}</p>
                    <span>{Props.product.price}</span>
                </DivTitulo>
                <ButtonWraper>
                    <DivMorebuttons>
                        <DivButtonChange><Minus color='#8047F8' /></DivButtonChange>
                        <span>0</span>
                        <DivButtonChange><Plus color='#8047F8' /></DivButtonChange>
                    </DivMorebuttons>

                    <DivRemoveButton><Trash color='#8047F8' />REMOVER</DivRemoveButton>

                </ButtonWraper>
            </DivDescricao>
        </DivCarrinhoItem>
    )
}