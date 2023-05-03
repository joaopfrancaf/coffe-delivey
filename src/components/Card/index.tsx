import { CardStyled, DivDescription, DivType } from "./style";
import img from '../../assets/Image-12.png'

export default function Card() {
    return (
        <CardStyled>
            <img src={img} width={120} height={120}/>
            <DivType><span>TRADICIONAL</span><span>ALCOÓLICO</span><span>GELADO</span></DivType>
            <DivDescription>
                <span>Expresso Tradicional</span>
                <p>O tradicional café feito com água quente e grãos moídos</p>
            </DivDescription>

            <div>
                <span>R$ 9,90</span>
                <div>
                    
                </div>
            </div>
        </CardStyled>
    )
}