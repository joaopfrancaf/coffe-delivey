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
                    <div><EUNAOAGUENTOMAISDIV className="ShoppingCart"><ShoppingCart fill="white"/></EUNAOAGUENTOMAISDIV><span>Compra simples e segura</span></div>
                    <div><EUNAOAGUENTOMAISDIV className="Package"><Package  fill="white"/></EUNAOAGUENTOMAISDIV><span>Embalagem mantém o café intacto</span></div>
                    <div><EUNAOAGUENTOMAISDIV className="Timer" ><Timer fill="white"/></EUNAOAGUENTOMAISDIV><span>Entrega rápida e rastreada</span></div>
                    <div><EUNAOAGUENTOMAISDIV className="Coffee"><Coffee fill="white"/></EUNAOAGUENTOMAISDIV><span>O café chega fresquinho até você</span></div>
                </DivHeaderFeatureStyled>
            </DivHeaderTextStyled>

            <img src={Imgcafe} />
        </DivHeaderStyled>
    )
}