import { DivCashOut, DivLocal, DivStyledNav, HeaderDiv } from "./styles";

import Logo from '../../assets/Logo.svg'
import { ShoppingCart, MapPin } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <HeaderDiv>
            <Link to='/'><img src={Logo} alt="logo" /></Link>

            <DivStyledNav>
                <DivLocal><MapPin weight="fill" color="#8047F8" size={20} /> Porto Alegre, RS</DivLocal>
                <DivCashOut><Link to='checkout'><ShoppingCart weight="fill" color="#C47F17" size={20} /></Link></DivCashOut>
            </DivStyledNav>
        </HeaderDiv>
    )
}