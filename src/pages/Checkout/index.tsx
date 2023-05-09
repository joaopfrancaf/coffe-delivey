import { useContext } from "react";
import Carrinho from "../../components/Carrinho";
import { ButtonDiv, ButtonWrapp, CheckoutTotals, DivCheckoutCarrinho, DivCheckoutCarrinhoContainer, DivCheckoutContainer, DivCheckoutSeuPedido, DivCheckoutSeuPedidoContainer, DivCheckoutSeuPedidoEndereco, DivDescricao, DivForm, DivPagamento, FinishButton, InputStyled } from "./style";
import { MapPin, CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";
import { CheckoutContext } from "../../context/checkoutContext";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as RadioGroup from '@radix-ui/react-radio-group';
import { priceFormatter } from "../../utils/formatter";

const CheckoutSchema = z.object({
    CEP: z.number().min(8).max(8),
    rua: z.string(),
    numero: z.number(),
    complemento: z.string(),
    bairro: z.string(),
    cidade: z.string(),
    uf: z.string(),
    pagamento: z.string()
})

type CheckoutSchematype = z.infer<typeof CheckoutSchema>

export default function Checkout() {
    const { checkout, CheckoutReducerProducts } = useContext(CheckoutContext)
    const { register, handleSubmit } = useForm<CheckoutSchematype>({
        resolver: zodResolver(CheckoutSchema)
    })

    function CalcTotalPreco() {
        const x = checkout.reduce((acc, currentValue) => {
            return acc + currentValue.product.price;
        }, 0);

        return x
    }

    function Submit(data: CheckoutSchematype) {
        ''
    }

    const totalProdutosPreco = CalcTotalPreco()

    const totalDeProdutosMaisEntrega = totalProdutosPreco + 3.5

    const totalDeProdutos = CheckoutReducerProducts()

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

                        <DivForm onSubmit={handleSubmit(Submit)}>
                            <InputStyled type="number" placeholder="CEP" {...register('CEP', { required: true, valueAsNumber: true })} />
                            <InputStyled placeholder="Rua" id="rua" className="inputrua"{...register('rua', { required: true })} />
                            <InputStyled type="number" placeholder="Número" {...register('numero', { required: true, valueAsNumber: true })} />
                            <InputStyled placeholder="Complemento" className="inputcomplemento" {...register('complemento', { required: true })} />
                            <InputStyled placeholder="Bairro" {...register('bairro', { required: true })} />
                            <InputStyled placeholder="Cidade" className="inputcidade" {...register('cidade', { required: true })} />
                            <InputStyled placeholder="UF" size={2} {...register('uf', { required: true })} />
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
                        <ButtonDiv id="CARTAO_DE_CREDITO" value="CARTAO DE CREDITO"><CreditCard color="#8047F8" />CARTÃO DE CREDITO</ButtonDiv>
                        <ButtonDiv id="CARTAO_DE_DEBITO" value="CARTAO DE DEBITO"><Bank color="#8047F8" />CARTÃO DE DEBITO</ButtonDiv>
                        <ButtonDiv id="DINHEIRO" value="DINHEIRO"><Money color="#8047F8" />DINHEIRO</ButtonDiv>
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
                        <div><span>Total de itens</span><span>{priceFormatter.format(totalProdutosPreco)}</span></div>
                        <div><span>Entrega</span><span>R$ 3,50</span></div>
                        <div className="total"><span>Total</span><span>{priceFormatter.format(totalDeProdutosMaisEntrega)}</span></div>
                    </CheckoutTotals>
                    <FinishButton type="submit">CONFIRMAR PEDIDO</FinishButton>

                </DivCheckoutCarrinho>
            </DivCheckoutCarrinhoContainer>

        </DivCheckoutContainer>
    )
}