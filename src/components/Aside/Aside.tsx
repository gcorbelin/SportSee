import styles from "@/styles/Aside.module.css";
import Image from "next/image";

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <nav className={styles["aside-nav"]}>
        <ul className={styles["aside-list"]}>
          <li>
            <a className={styles["aside-link"]} href="##">
              <Image src="/assets/repos.svg" width={36} height={32} alt="" />
            </a>
          </li>
          <li>
            <a className={styles["aside-link"]} href="##">
              <Image src="/assets/natation.svg" width={32} height={32} alt="" />
            </a>
          </li>
          <li>
            <a className={styles["aside-link"]} href="##">
              <Image src="/assets/velo.svg" width={37} height={32} alt="" />
            </a>
          </li>
          <li>
            <a className={styles["aside-link"]} href="##">
              <Image src="/assets/altere.svg" width={32} height={32} alt="" />
            </a>
          </li>
        </ul>
      </nav>
      <p className={styles.copyright}>Copiryght, SportSee 2020</p>
    </aside>
  );
}
