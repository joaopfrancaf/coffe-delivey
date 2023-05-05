import { CardStyled, CarrinhoAdd, CheckoutDiv, DivDescription, DivType } from "./style";
import { DivButtonChange, DivMorebuttons } from "../Carrinho/style";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { Coffe } from "../../context/coffeContext";
import { useContext, useState } from "react";
import { CheckoutContext } from "../../context/checkoutContext";

export default function Card({ ...Props }: Coffe) {
    const [amount, setAmount] = useState(0)
    const { SetCheckout } = useContext(CheckoutContext)

    function Increment() {
        setAmount(prevState => prevState + 1)
        SetCheckout({
            product: Props,
            amount: amount
        })
    }

    function decrement() {
        setAmount(prevState => prevState - 1)
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
                    <DivButtonChange onClick={decrement} disabled={!amount}><Minus color='#8047F8' /></DivButtonChange>
                    <span>{amount}</span>
                    <DivButtonChange onClick={Increment}><Plus color='#8047F8' /></DivButtonChange>
                </DivMorebuttons>

                <CarrinhoAdd disabled={!amount}><ShoppingCart color="white" weight="fill" size={18} /></CarrinhoAdd>
            </CheckoutDiv>
        </CardStyled>
    )
}