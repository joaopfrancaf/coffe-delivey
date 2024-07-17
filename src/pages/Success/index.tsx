import { DivContainer, DivTextConfirmado, DivInformacoesContainer, DivEndereco, DivPrevisao, DivPagamento, DivContainerInfoeImg, DivElement, DivIcon } from "./styles";
import img from '../../assets/Illustration.png'
import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'
import { useContext, useEffect } from "react";
import { CheckoutContext } from "../../context/checkoutContext";

export default function Success() {
    const { apiResponsePedido } = useContext(CheckoutContext)

    useEffect(() => {

        async function sendNotification() {
            navigator.serviceWorker.register("service-worker.js")
            .then(async serviceWorker => {
                let subs = await serviceWorker.pushManager.getSubscription()

                await fetch("https://coffe-api-nextjs.vercel.app/api/push/send", {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(subs)
                })
            })
        }

        sendNotification()
    })
    return (
        <DivContainer>
            <DivTextConfirmado>
                <h2>Uhu! Pedido confirmado</h2>
                <span>Agora é só aguardar que logo o café chegará até você</span>
            </DivTextConfirmado>

            <DivContainerInfoeImg>
                <DivInformacoesContainer>
                    <DivEndereco>
                        <DivElement><DivIcon color="roxo"><MapPin fill="white" weight="fill" /></DivIcon><p>Entrega em <span>{apiResponsePedido.endereco.rua}</span> {apiResponsePedido.endereco.bairro} - {apiResponsePedido.endereco.cidade}, {apiResponsePedido.endereco.uf}</p></DivElement>
                    </DivEndereco>
                    <DivPrevisao>
                        <DivElement><DivIcon color="amarelo"><Timer fill="white" weight="fill" /></DivIcon><p>Previsão de entrega<br /><span>20 min - 30 min</span></p></DivElement>
                    </DivPrevisao>
                    <DivPagamento>
                        <DivElement><DivIcon color="ouro"><CurrencyDollar fill="white" weight="fill" /></DivIcon><p>Pagamento na entrega <br /><span>{apiResponsePedido.endereco.pagamento}</span></p></DivElement>
                    </DivPagamento>
                </DivInformacoesContainer>

                <img src={img} />
            </DivContainerInfoeImg>
        </DivContainer>
    )
}