import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.text}>
          <div className={styles.textTsar}>
            22) И когда Он Снял пятую печать, я увидел под жертвенником души
            убиенных за слово Божие и за свидетельство, которое они имели. И
            возопили они громким голосом, говоря: Доколе, Владыка Святой и
            Истинный, не Судишь и не Мстишь живущим на земле за кровь нашу? И
            даны были каждому из них одежды белые, и сказано им, чтобы они
            успокоились ещё на малое время, пока и сотрудники их и братья их,
            которые будут убиты, как и они, дополнят число.
          </div>
          <Link href="/lights">Пятая печать.</Link>
          <Link href="/lights" className={styles.textTsar}>
            Вернуться на главную.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
