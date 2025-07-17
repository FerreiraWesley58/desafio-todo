import styles from "./header.module.css";
import logo from "../../assets/logo.svg";

// Componente de cabeçalho da aplicação, exibe o logo
export function Header() {
  return (
    <header className={styles.header}>
      {/* Logo da aplicação */}
      <img src={logo} alt="todo" />
    </header>
  );
}
