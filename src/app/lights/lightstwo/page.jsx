import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.text}>
          <div className={styles.textTsar}>
            19) И когда Он Снял вторую печать, я слышал второе животное,
            говорящее: иди и смотри. И вышел другой конь, рыжий; и сидящему на
            нём дано взять мир с земли, и чтобы убивали друг друга; и дан ему
            большой меч.
          </div>
          <Link href={"/lights"}>Вторая печать.</Link>
          <Link href="/lights" className={styles.textTsar}>
            Вернуться на главную.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
