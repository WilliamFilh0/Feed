import styles from "./Header.module.css";

import IgniteLogo from "../assets/Ignite-log.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <strong>Ignite Feed</strong>
      <img src={IgniteLogo} alt="Logotipo do Ignite" />
    </header>
  );
}
