import { DivHeaderFeatureStyled, DivHeaderH1Styled, DivHeaderPStyled, DivHeaderStyled, DivHeaderTextStyled, EUNAOAGUENTOMAISDIV } from "./styles";
import Imgcafe from '../../assets/Imagemcafe.png'
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

export default function Homehero() {
    return (
        <DivHeaderStyled>
            <DivHeaderTextStyled>
                <DivHeaderH1Styled>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                </DivHeaderH1Styled>
                <DivHeaderPStyled>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </DivHeaderPStyled>

                <DivHeaderFeatureStyled>
                    <div><EUNAOAGUENTOMAISDIV><ShoppingCart /></EUNAOAGUENTOMAISDIV><span>Compra simples e segura</span></div>
                    <div><EUNAOAGUENTOMAISDIV><Package /></EUNAOAGUENTOMAISDIV><span>Embalagem mantém o café intacto</span></div>
                    <div><EUNAOAGUENTOMAISDIV><Timer /></EUNAOAGUENTOMAISDIV><span>Entrega rápida e rastreada</span></div>
                    <div><EUNAOAGUENTOMAISDIV><Coffee /></EUNAOAGUENTOMAISDIV><span>O café chega fresquinho até você</span></div>
                </DivHeaderFeatureStyled>
            </DivHeaderTextStyled>

            <img src={Imgcafe} />
        </DivHeaderStyled>
    )
}