import { DivHeaderFeatureStyled, DivHeaderH1Styled, DivHeaderPStyled, DivHeaderStyled, DivHeaderTextStyled } from "./styles";
import Imgcafe from '../../assets/Imagemcafe.png'
import { ShoppingCart } from '@phosphor-icons/react'

export default function Homepage() {
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
                    <ShoppingCart/> <span>Compra simples e segura</span>
                </DivHeaderFeatureStyled>
            </DivHeaderTextStyled>

            <img src={Imgcafe}/>
        </DivHeaderStyled>
    )
}