import { CardStyled, CarrinhoAdd, CheckoutDiv, DivDescription, DivType } from "./style";
import img from '../../assets/Image-12.png'
import { DivButtonChange, DivMorebuttons } from "../Carrinho/style";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { Coffe } from "../../context/coffeContext";

export default function Card({ ...Props }: Coffe) {
    return (
        <CardStyled>
            <img src={Props.img} width={120} height={120} />
            <DivType><span>TRADICIONAL</span><span>ALCOÓLICO</span><span>GELADO</span></DivType>
            <DivDescription>
                <span>{Props.name}</span>
                <p>{Props.description}</p>
            </DivDescription>

            <CheckoutDiv>
                <span className="money">{Props.price}</span>

                <DivMorebuttons>
                    <DivButtonChange><Minus color='#8047F8' /></DivButtonChange>
                    <span>0</span>
                    <DivButtonChange><Plus color='#8047F8' /></DivButtonChange>
                </DivMorebuttons>

                <CarrinhoAdd><ShoppingCart color="white" weight="fill" size={18} /></CarrinhoAdd>
            </CheckoutDiv>
        </CardStyled>
    )
}