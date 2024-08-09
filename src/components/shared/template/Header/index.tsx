import Logo from "../../../../assets/LogoBlogSpot.svg";
import { Button } from "../../fragments/buttons/Button";
import { ModalMenu } from "./ModalMenu";

export function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo BlogSpot" />

      <button>Modo de cor</button>

      <Button>menu</Button>
      <ModalMenu />
    </header>
  );
}
