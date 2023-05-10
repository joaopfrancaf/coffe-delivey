import { useContext } from "react";
import Carrinho from "../../components/Carrinho";
import { ButtonDiv, ButtonWrapp, CheckoutTotals, DivCheckoutCarrinho, DivCheckoutCarrinhoContainer, DivCheckoutContainer, DivCheckoutSeuPedido, DivCheckoutSeuPedidoContainer, DivCheckoutSeuPedidoEndereco, DivDescricao, DivForm, DivPagamento, FinishButton, InputStyled } from "./style";
import { MapPin, CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";
import { CheckoutContext } from "../../context/checkoutContext";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { priceFormatter } from "../../utils/formatter";
import EmptyCard from "../../components/EmptyCarrinho";

const CheckoutSchema = z.object({
    CEP: z.number(),
    rua: z.string(),
    numero: z.number(),
    complemento: z.string(),
    bairro: z.string(),
    cidade: z.string(),
    uf: z.string(),
    pagamento: z.enum(["CARTAO_DE_CREDITO", "CARTAO_DE_DEBITO", "DINHEIRO"], { required_error: 'ERROR' }),
    //carrinho: z.object({}).array().min(1)
})

type CheckoutSchematype = z.infer<typeof CheckoutSchema>

export default function Checkout() {
    const { checkout, CheckoutReducerProducts, Submit } = useContext(CheckoutContext)
    const { register, handleSubmit, control, formState: { isSubmitting } } = useForm<CheckoutSchematype>({
        resolver: zodResolver(CheckoutSchema)
    })

    function CalcTotalPreco() {
        const x = checkout.reduce((acc, currentValue) => {
            return acc + currentValue.product.price;
        }, 0);

        return x
    }

    const totalProdutosPreco = CalcTotalPreco()

    const totalDeProdutosMaisEntrega = totalProdutosPreco + 3.5

    const totalDeProdutos = CheckoutReducerProducts()

    return (
        <form id="my-form" onSubmit={handleSubmit(Submit)}>
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
                                <InputStyled type="number" placeholder="CEP" required {...register('CEP', { required: true, valueAsNumber: true })} />
                                <InputStyled placeholder="Rua" id="rua" required className="inputrua"{...register('rua', { required: true })} />
                                <InputStyled type="number" placeholder="Número" required {...register('numero', { required: true, valueAsNumber: true })} />
                                <InputStyled placeholder="Complemento" className="inputcomplemento" required {...register('complemento', { required: true })} />
                                <InputStyled placeholder="Bairro" required {...register('bairro', { required: true })} />
                                <InputStyled placeholder="Cidade" className="inputcidade" required {...register('cidade', { required: true })} />
                                <InputStyled placeholder="UF" size={2} required {...register('uf', { required: true })} />
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

                        <Controller
                            control={control}
                            name="pagamento" render={({ field }) => {
                                return (
                                    <ButtonWrapp id="my-form" onValueChange={field.onChange} value={field.value} required>
                                        <ButtonDiv id="CARTAO_DE_CREDITO" value="CARTAO_DE_CREDITO"><CreditCard color="#8047F8" />CARTÃO DE CREDITO</ButtonDiv>
                                        <ButtonDiv id="CARTAO_DE_DEBITO" value="CARTAO_DE_DEBITO"><Bank color="#8047F8" />CARTÃO DE DEBITO</ButtonDiv>
                                        <ButtonDiv id="DINHEIRO" value="DINHEIRO"><Money color="#8047F8" />DINHEIRO</ButtonDiv>
                                    </ButtonWrapp>
                                )
                            }}
                        />
                    </DivPagamento>
                </div>

                <DivCheckoutCarrinhoContainer>
                    <h2>Cafés selecionados</h2>
                    <DivCheckoutCarrinho>
                        {totalDeProdutos.length ? totalDeProdutos?.map(x => {
                            return (
                                <div key={x.product.id} className="LOL">
                                    <li><Carrinho key={x.product.id} product={x.product} /></li>
                                    <div className="divspace"></div>
                                </div>
                            )
                        }) :
                            <EmptyCard />
                        }
                        <CheckoutTotals>
                            <div><span>Total de itens</span><span>{priceFormatter.format(totalProdutosPreco)}</span></div>
                            <div><span>Entrega</span><span>R$ 3,50</span></div>
                            <div className="total"><span>Total</span><span>{priceFormatter.format(totalDeProdutosMaisEntrega)}</span></div>
                        </CheckoutTotals>
                        <FinishButton type="submit" form="my-form" disabled={isSubmitting}>CONFIRMAR PEDIDO</FinishButton>

                    </DivCheckoutCarrinho>
                </DivCheckoutCarrinhoContainer>

            </DivCheckoutContainer>
        </form>
    )
}