import { DivCashOut, DivLocal, DivStyledNav, HeaderDiv } from "./styles";

import Logo from '../../assets/Logo.svg'
import { ShoppingCart, MapPin } from "@phosphor-icons/react";

export default function Header () {
    return (
        <>
            <HeaderDiv>
                <img src={Logo} alt="logo"/>

                <DivStyledNav>
                    <DivLocal><MapPin weight="fill" color="#8047F8" size={20}/> Porto Alegre, RS</DivLocal>
                    <DivCashOut><ShoppingCart weight="fill" color="#C47F17" size={20}/></DivCashOut>
                </DivStyledNav>
            </HeaderDiv>
        </>
    )
}