import Carrinho from "../../components/Carrinho";
import { ButtonDiv, ButtonWrapp, DivCheckoutCarrinho, DivCheckoutContainer, DivCheckoutSeuPedido, DivCheckoutSeuPedidoContainer, DivCheckoutSeuPedidoEndereco, DivDescricao, DivForm, DivPagamento, InputStyled } from "./style";
import { MapPin, CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";

export default function Checkout() {
    return (
        <DivCheckoutContainer>
            <DivCheckoutSeuPedidoContainer>
                <h2>Complete seu pedido</h2>

                <DivCheckoutSeuPedido>
                    <DivCheckoutSeuPedidoEndereco>
                        <MapPin size={28} color="#C47F17" />
                        <div>
                            <span>Endereço de Entrega</span>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </DivCheckoutSeuPedidoEndereco>

                    <DivForm>
                        <InputStyled placeholder="CEP" />
                        <InputStyled placeholder="Rua" size={73} />
                        <InputStyled placeholder="Número" />
                        <InputStyled placeholder="Complemento" size={44} />
                        <InputStyled placeholder="Bairro" />
                        <InputStyled placeholder="Cidade" size={33} />
                        <InputStyled placeholder="UF" size={2} />
                    </DivForm>
                </DivCheckoutSeuPedido>
            </DivCheckoutSeuPedidoContainer>

            <DivPagamento>
                <DivDescricao>
                    <CurrencyDollar size={28} color="#8047F8" />
                    <div>
                        <span>Pagamento</span>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </div>
                </DivDescricao>

                <ButtonWrapp>
                    <ButtonDiv id="CARTAO_DE_CREDITO" name="drone" value="CARTÃO DE CREDITO"><CreditCard color="#8047F8" />CARTÃO DE CREDITO</ButtonDiv>
                    <ButtonDiv id="CARTAO_DE_DEBITO" name="drone" value="CARTÃO DE DEBITO"><Bank color="#8047F8" />CARTÃO DE DEBITO</ButtonDiv>
                    <ButtonDiv id="DINHEIRO" name="drone" value="DINHEIRO"><Money color="#8047F8" />DINHEIRO</ButtonDiv>
                </ButtonWrapp>
            </DivPagamento>

            <DivCheckoutCarrinho>
                <ul>
                    <li><Carrinho /></li>
                    <li><Carrinho /></li>
                </ul>
            </DivCheckoutCarrinho>
        </DivCheckoutContainer>
    )
}