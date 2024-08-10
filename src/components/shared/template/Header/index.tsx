import { useState } from "react";
import Logo from "../../../../assets/LogoBlogSpot.svg";
import { Button } from "../../fragments/buttons/Button";
import { ModalMenu } from "./ModalMenu";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <header>
      <img src={Logo} alt="Logo BlogSpot" />

      <button>Modo de cor</button>

      <Button onClick={() => setIsVisible(true)}>menu</Button>
      {isVisible ? <ModalMenu onClose={() => setIsVisible(false)} /> : null}
    </header>
  );
}
