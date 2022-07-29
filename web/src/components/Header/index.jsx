import { Container } from "./styles";
import icon from "../../assets/icon.png";

export function Header ( ) {
  return (

      <Container>
        <strong>Studio Thalita Couto</strong>
        <img src={icon} alt="Icone do Studio Thalita Couto" />
      </Container>
  ) 
}