import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.text}>
          <div className={styles.textTsar}>
            21) И когда Он Снял четвёртую печать, я слышал голос четвёртого
            животного, говорящий: иди и смотри. И я взглянул, и вот, конь
            бледный, и на нём всадник, которому имя "смерть"; и ад следовал за
            ним; и дана ему власть над четвёртою частью земли – умерщвлять мечом
            и голодом, и мором, и зверями земными.
          </div>
          <Link href="/lights">Четвёртая печать.</Link>
          <Link href="/lights" className={styles.textTsar}>
            Вернуться на главную.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
