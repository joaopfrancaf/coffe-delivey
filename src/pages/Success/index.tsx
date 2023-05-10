import { DivContainer, DivTextConfirmado, DivInformacoesContainer, DivEndereco, DivPrevisao, DivPagamento, DivContainerInfoeImg, DivElement, DivIcon } from "./styles";
import img from '../../assets/Illustration.png'
import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'
import { useContext } from "react";
import { CheckoutContext } from "../../context/checkoutContext";

export default function Success() {
    const {apiResponse} = useContext(CheckoutContext)

    console.log(typeof apiResponse)
    return (
        <DivContainer>
            <DivTextConfirmado>
                <h2>Uhu! Pedido confirmado</h2>
                <span>Agora é só aguardar que logo o café chegará até você</span>
            </DivTextConfirmado>

            <DivContainerInfoeImg>
                <DivInformacoesContainer>
                    <DivEndereco>
                        <DivElement><DivIcon color="roxo"><MapPin fill="white" weight="fill" /></DivIcon><p>Entrega em <span>Rua João Daniel Martinelli, 102</span> Farrapos - Porto Alegre, RS</p></DivElement>
                    </DivEndereco>
                    <DivPrevisao>
                        <DivElement><DivIcon color="amarelo"><Timer fill="white" weight="fill" /></DivIcon><p>Previsão de entrega<br /><span>20 min - 30 min</span></p></DivElement>
                    </DivPrevisao>
                    <DivPagamento>
                        <DivElement><DivIcon color="ouro"><CurrencyDollar fill="white" weight="fill" /></DivIcon><p>Pagamento na entrega <br /><span>Cartão de Crédito</span></p></DivElement>
                    </DivPagamento>
                </DivInformacoesContainer>

                <img src={img} />
            </DivContainerInfoeImg>
        </DivContainer>
    )
}