import { useContext } from "react";
import Carrinho from "../../components/Carrinho";
import { ButtonDiv, ButtonWrapp, CheckoutTotals, DivCheckoutCarrinho, DivCheckoutCarrinhoContainer, DivCheckoutContainer, DivCheckoutSeuPedido, DivCheckoutSeuPedidoContainer, DivCheckoutSeuPedidoEndereco, DivDescricao, DivForm, DivPagamento, FinishButton, InputStyled } from "./style";
import { MapPin, CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";
import { CheckoutContext } from "../../context/checkoutContext";

export default function Checkout() {
    const { checkout, CalcAmount } = useContext(CheckoutContext)

    function CalcTotalPreco() {
        const x = checkout.reduce((acc, currentValue) => {
            return acc + currentValue.product.price;
        }, 0);

        return x
    }

    const totalProdutosPreco = CalcTotalPreco()

    const totalDeProdutos = CalcAmount()

    return (
        <DivCheckoutContainer>
            <div>
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
                            <InputStyled placeholder="Rua" id="rua" className="inputrua" />
                            <InputStyled placeholder="Número" />
                            <InputStyled placeholder="Complemento" className="inputcomplemento" />
                            <InputStyled placeholder="Bairro" />
                            <InputStyled placeholder="Cidade" className="inputcidade" />
                            <InputStyled placeholder="UF" size={2} />
                        </DivForm>
                    </DivCheckoutSeuPedido>
                </DivCheckoutSeuPedidoContainer>

                <DivPagamento>
                    <DivDescricao>
                        <CurrencyDollar size={28} color="#8047F8" />
                        <div>
                            <span>Pagamento</span>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja</p>
                        </div>
                    </DivDescricao>

                    <ButtonWrapp>
                        <ButtonDiv id="CARTAO_DE_CREDITO" name="drone" value="CARTÃO DE CREDITO"><CreditCard color="#8047F8" />CARTÃO DE CREDITO</ButtonDiv>
                        <ButtonDiv id="CARTAO_DE_DEBITO" name="drone" value="CARTÃO DE DEBITO"><Bank color="#8047F8" />CARTÃO DE DEBITO</ButtonDiv>
                        <ButtonDiv id="DINHEIRO" name="drone" value="DINHEIRO"><Money color="#8047F8" />DINHEIRO</ButtonDiv>
                    </ButtonWrapp>
                </DivPagamento>
            </div>

            <DivCheckoutCarrinhoContainer>
                <h2>Cafés selecionados</h2>
                <DivCheckoutCarrinho>
                    <ul>
                        {totalDeProdutos?.map(x => {
                            return (
                                <>
                                    <li><Carrinho key={x.product.id} product={x.product} /></li>
                                    <div className="divspace"></div>
                                </>
                            )
                        })}
                    </ul>
                    <CheckoutTotals>
                        <div><span>Total de itens</span><span>R$ {totalProdutosPreco}</span></div>
                        <div><span>Entrega</span><span>R$ 3,50</span></div>
                        <div className="total"><span>Total</span><span>R$ {totalProdutosPreco + 3.50}</span></div>
                    </CheckoutTotals>
                    <FinishButton>CONFIRMAR PEDIDO</FinishButton>

                </DivCheckoutCarrinho>
            </DivCheckoutCarrinhoContainer>

        </DivCheckoutContainer>
    )
}