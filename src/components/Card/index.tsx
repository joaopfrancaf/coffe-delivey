import { CardStyled, CarrinhoAdd, CheckoutDiv, DivDescription, DivType } from "./style";
import { DivButtonChange, DivMorebuttons } from "../Carrinho/style";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { Coffe, CoffeContext } from "../../context/coffeContext";
import { useContext, useState } from "react";
import { CheckoutContext } from "../../context/checkoutContext";
import { Link } from "react-router-dom";

export default function Card({ ...Props }: Coffe) {
    const { SetCheckoutAdd, SetCheckoutRemove, QuantidadeDeCafes } = useContext(CheckoutContext)

    function Add() {
        SetCheckoutAdd({
            product: Props
        })
    }

    function Remove() {
        SetCheckoutRemove({
            product: Props
        })
    }

    const amount = QuantidadeDeCafes(Props)

    return (
        <CardStyled>
            <img src={Props.img} width={120} height={120} />
            <DivType>{Props.type.map(type => <span>{type}</span>)}</DivType>
            <DivDescription>
                <span>{Props.name}</span>
                <p>{Props.description}</p>
            </DivDescription>

            <CheckoutDiv>
                <span className="money">{Props.price}</span>

                <DivMorebuttons>{/*n sei se esse disabled abaixo é o "ideal"*/}
                    <DivButtonChange onClick={Remove} ><Minus color='#8047F8' /></DivButtonChange>
                    <span>{amount}</span>
                    <DivButtonChange onClick={Add}><Plus color='#8047F8' /></DivButtonChange>
                </DivMorebuttons>

                <Link to={"checkout"}><CarrinhoAdd ><ShoppingCart color="white" weight="fill" size={18} /></CarrinhoAdd></Link>
            </CheckoutDiv>
        </CardStyled>
    )
}