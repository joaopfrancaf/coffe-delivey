import { DivCafeContainer, DivCafeContainerWrap, DivHeaderFeatureStyled, DivHeaderH1Styled, DivHeaderPStyled, DivHeaderStyled, DivHeaderTextStyled, EUNAOAGUENTOMAISDIV } from "./styles";
import Imgcafe from '../../assets/Imagemcafe.png'
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'
import Card from "../../components/Card";
import { useContext, useEffect } from "react";
import { CoffeContext } from "../../context/coffeContext";

export default function Homehero() {
    const { coffes } = useContext(CoffeContext)
    
    return (
        <>
            <DivHeaderStyled>
                <DivHeaderTextStyled>
                    <DivHeaderH1Styled>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    </DivHeaderH1Styled>
                    <DivHeaderPStyled>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </DivHeaderPStyled>

                    <DivHeaderFeatureStyled>
                        <div><EUNAOAGUENTOMAISDIV className="ShoppingCart"><ShoppingCart fill="white" weight="fill" /></EUNAOAGUENTOMAISDIV><span>Compra simples e segura</span></div>
                        <div><EUNAOAGUENTOMAISDIV className="Package"><Package fill="white" weight="fill" /></EUNAOAGUENTOMAISDIV><span>Embalagem mantém o café intacto</span></div>
                        <div><EUNAOAGUENTOMAISDIV className="Timer" ><Timer fill="white" weight="fill" /></EUNAOAGUENTOMAISDIV><span>Entrega rápida e rastreada</span></div>
                        <div><EUNAOAGUENTOMAISDIV className="Coffee"><Coffee fill="white" weight="fill" /></EUNAOAGUENTOMAISDIV><span>O café chega fresquinho até você</span></div>
                    </DivHeaderFeatureStyled>
                </DivHeaderTextStyled>

                <img src={Imgcafe} />
            </DivHeaderStyled>

            <DivCafeContainer>
                <h1>Nossos cafés</h1>

                <DivCafeContainerWrap>
                    {coffes?.map(coffe =>
                        <Card key={coffe.id} id={coffe.id} name={coffe.name} type={coffe.type} description={coffe.description} price={coffe.price} img={coffe.img} />
                    )}
                </DivCafeContainerWrap>
            </DivCafeContainer>
        </>
    )
}