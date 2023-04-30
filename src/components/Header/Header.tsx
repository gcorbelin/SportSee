import styles from "@/styles/Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/assets/logo.svg"
        alt="SportSee Logo"
        width={178}
        height={61}
        priority
      />
      <nav aria-label="Navigation principale" className={styles["header-nav"]}>
        <ul className={styles["header-list"]}>
          <li>
            <a href="##" className={styles["header-link"]}>
              Accueil
            </a>
          </li>
          <li>
            <a href="##" className={styles["header-link"]}>
              Profil
            </a>
          </li>
          <li>
            <a href="##" className={styles["header-link"]}>
              Réglage
            </a>
          </li>
          <li>
            <a href="##" className={styles["header-link"]}>
              Communauté
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
