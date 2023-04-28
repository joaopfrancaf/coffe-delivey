import { DivHeaderFeatureStyled, DivHeaderStyled, DivHeaderTextStyled } from "./styles";
import Imgcafe from '../../assets/Imagemcafe.png'

export default function Homepage() {
    return (
        <DivHeaderStyled>
            <DivHeaderTextStyled>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </DivHeaderTextStyled>

            <DivHeaderFeatureStyled>
                
            </DivHeaderFeatureStyled>

            <img src={Imgcafe}/>
            
        </DivHeaderStyled>
    )
}