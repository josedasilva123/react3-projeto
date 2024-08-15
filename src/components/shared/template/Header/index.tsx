import { useState } from "react";
import Logo from "../../../../assets/LogoBlogSpot.svg";
import { Button } from "../../fragments/buttons/Button";
import { ModalMenu } from "./ModalMenu";
import { Container } from "../../fragments/grid/Container";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.box}>
          <Link to="/">
            <img className={styles.logo} src={Logo} alt="Logo BlogSpot" />
          </Link>

          <div>
            <button title="Alterar modo de cor" aria-label="colormode">
              <span className="material-symbols-outlined">light_mode</span>
            </button>

            <Button buttonColor="outline" onClick={() => setIsVisible(true)}>
              menu
            </Button>
          </div>
          {isVisible ? <ModalMenu onClose={() => setIsVisible(false)} /> : null}
        </div>
      </Container>
    </header>
  );
}
