import PropTypes from "prop-types";
import styles from "@/styles/DataBlock.module.css";
import utilsStyles from "@/styles/utils.module.css";
import Image from "next/image";

export enum Colors {
  red = "red",
  blue = "blue",
  yellow = "yellow",
  pink = "pink",
}

interface DataBlockProps {
  img: string;
  color: Colors;
  data: string;
  label: string;
}
export default function DataBlock({ img, color, data, label }: DataBlockProps) {
  return (
    <div className={`${utilsStyles.block} ${styles.block}`}>
      <div
        className={`${styles["image-wrapper"]} ${
          styles[`image-wrapper-${color}`]
        }`}
      >
        <Image src={img} width={20} height={20} alt="" />
      </div>
      <div className={styles["content-wrapper"]}>
        <div className={styles["content-value"]}>{data}</div>
        <div className={styles["content-label"]}>{label}</div>
      </div>
    </div>
  );
}

DataBlock.propTypes = {
  img: PropTypes.string.isRequired,
  color: PropTypes.oneOf<Colors>(Object.values(Colors)).isRequired,
  data: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
