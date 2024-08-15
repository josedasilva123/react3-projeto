import { useState } from "react";
import Logo from "../../../../assets/LogoBlogSpot.svg";
import { Button } from "../../fragments/buttons/Button";
import { ModalMenu } from "./ModalMenu";
import { Container } from "../../fragments/grid/Container";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <header>
      <Container>
        <img src={Logo} alt="Logo BlogSpot" />

        <button>Modo de cor</button>

        <Button buttonColor="outline" onClick={() => setIsVisible(true)}>
          menu
        </Button>
        {isVisible ? <ModalMenu onClose={() => setIsVisible(false)} /> : null}
      </Container>
    </header>
  );
}
