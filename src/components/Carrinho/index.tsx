import { ButtonWraper, DivButtonChange, DivCarrinhoItem, DivDescricao, DivMorebuttons, DivRemoveButton, DivTitulo } from "./style";
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { CheckoutContext } from "../../context/checkoutContext";
import { useContext } from "react";
import { priceFormatter } from "../../utils/formatter";
import { Coffe } from "../../context/coffeContext";

export default function Carrinho({ ...Props }: Coffe) {
    const { SetCheckoutAdd, SetCheckoutRemove, QuantidadeProdutosNoCarrinho, RemoveItem } = useContext(CheckoutContext)

    function Add() {
        SetCheckoutAdd(Props)
    }

    function Remove() {
        SetCheckoutRemove(Props)
    }

    function RemoveItemfunction() {
        RemoveItem(Props)
    }

    const quantidadeAmount = QuantidadeProdutosNoCarrinho(Props)

    return (
        <DivCarrinhoItem>
            <img src={Props.img} width={64} />
            <DivDescricao >
                <DivTitulo>
                    <p>{Props.name}</p>
                    <span>{priceFormatter.format(Props.price)}</span>
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