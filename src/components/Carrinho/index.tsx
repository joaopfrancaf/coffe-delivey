import { ButtonWraper, DivButtonChange, DivCarrinhoItem, DivDescricao, DivMorebuttons, DivRemoveButton, DivTitulo } from "./style";
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { Checkout, CheckoutContext } from "../../context/checkoutContext";
import { useContext } from "react";
import { priceFormatter } from "../../utils/formatter";

export default function Carrinho({ ...Props }: Checkout) {
    const { SetCheckoutAdd, SetCheckoutRemove, QuantidadeProdutosNoCarrinho, RemoveItem } = useContext(CheckoutContext)

    function Add() {
        SetCheckoutAdd({
            product: Props.product
        })
    }

    function Remove() {
        SetCheckoutRemove({
            product: Props.product
        })
    }

    function RemoveItemfunction () {
        RemoveItem(Props.product)
    }

    const quantidadeAmount = QuantidadeProdutosNoCarrinho(Props)

    return (
        <DivCarrinhoItem>
            <img src={Props.product.img} width={64} />
            <DivDescricao >
                <DivTitulo>
                    <p>{Props.product.name}</p>
                    <span>{priceFormatter.format(Props.product.price)}</span>
                </DivTitulo>
                <ButtonWraper>
                    <DivMorebuttons>
                        <DivButtonChange type="button" onClick={Remove}><Minus color='#8047F8' /></DivButtonChange>
                        <span>{quantidadeAmount}</span>
                        <DivButtonChange type="button" onClick={Add}><Plus color='#8047F8' /></DivButtonChange>
                    </DivMorebuttons>

                    <DivRemoveButton type="button" onClick={RemoveItemfunction}><Trash color='#8047F8' />REMOVER</DivRemoveButton>

                </ButtonWraper>
            </DivDescricao>
        </DivCarrinhoItem>
    )
}