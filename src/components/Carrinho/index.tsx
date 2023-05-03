import { ButtonWraper, DivButtonChange, DivCarrinhoItem, DivDescricao, DivMorebuttons, DivRemoveButton, DivTitulo } from "./style";
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import img from '../../assets/Image-2.png'

export default function Carrinho() {
    return (
        <DivCarrinhoItem>
            <img src={img} width={64} />
            <DivDescricao >
                <DivTitulo>
                    <p>Expresso Tradicional</p>
                    <span>R$ 9,90</span>
                </DivTitulo>
                <ButtonWraper>
                    <DivMorebuttons>
                        <DivButtonChange><Minus color='#8047F8' /></DivButtonChange>
                        <span>0</span>
                        <DivButtonChange><Plus color='#8047F8' /></DivButtonChange>
                    </DivMorebuttons>

                    <DivRemoveButton><Trash color='#8047F8' />REMOVER</DivRemoveButton>

                </ButtonWraper>
            </DivDescricao>
        </DivCarrinhoItem>
    )
}