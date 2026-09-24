import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.text}>
          <div className={styles.textTsar}>
            20) И когда Он Снял третью печать, я слышал третье животное,
            говорящее: иди и смотри. Я взглянул, и вот, конь вороной, и на нём
            всадник, имеющий меру в руке своей. И слышал я голос посреди четырёх
            животных, говорящий: хиникс пшеницы за динарий, и три хиникса ячменя
            за динарий; елея же и вина не повреждай.
          </div>
          <Link href="/lights">Третья печать.</Link>
          <Link href="/lights" className={styles.textTsar}>
            Вернуться на главную.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
