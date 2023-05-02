import Header from "./components/Header";
import { ContainerStyled } from "./styles";
import Homepage from './pages/Homepage'
import Checkout from "./pages/Checkout";

export default function App() {

  return (
    <ContainerStyled>
      <Header/>
      <Checkout/>
    </ContainerStyled>
  )
}