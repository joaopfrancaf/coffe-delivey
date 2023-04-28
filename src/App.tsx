import Header from "./components/Header";
import { ContainerStyled } from "./styles";
import Homepage from './pages/Homepage'

export default function App() {

  return (
    <ContainerStyled>
      <Header/>
      <Homepage/>
    </ContainerStyled>
  )
}