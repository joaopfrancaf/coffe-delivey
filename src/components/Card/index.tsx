import { CardStyled, CarrinhoAdd, CheckoutDiv, DivDescription, DivType } from "./style";
import { DivButtonChange, DivMorebuttons } from "../Carrinho/style";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { Coffe } from "../../context/coffeContext";
import { useContext, useState } from "react";
import { CheckoutContext } from "../../context/checkoutContext";
import { Link } from "react-router-dom";

export default function Card({ ...Props }: Coffe) {
    const [amount, setAmount] = useState<number>(0)
    const { SetCheckoutAdd, SetCheckoutRemove } = useContext(CheckoutContext)

    function Add() {
        setAmount(prevState => prevState + 1)
        SetCheckoutAdd({
            product: Props,
        })
    }

    function Remove() {
        setAmount(prevState => prevState - 1)
        SetCheckoutRemove({
            product: Props,
        })
    }

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
                    <DivButtonChange onClick={Remove} disabled={!amount}><Minus color='#8047F8' /></DivButtonChange>
                    <span>{amount}</span>
                    <DivButtonChange onClick={Add}><Plus color='#8047F8' /></DivButtonChange>
                </DivMorebuttons>

                <Link to={"checkout"}><CarrinhoAdd disabled={!amount}><ShoppingCart color="white" weight="fill" size={18} /></CarrinhoAdd></Link>
            </CheckoutDiv>
        </CardStyled>
    )
}