import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.textTsar}>
          <h1>
            17) И я видел, что Агнец Снял первую из семи печатей, и я услышал
            одно из четырёх животных, говорящее как бы громовым голосом: иди и
            смотри. 18) Я взглянул, и вот, конь белый, на нём всадник, имеющий
            лук, и дан был ему венец; и вышел он как победоносный, и чтобы
            победить.
          </h1>
          <Link href="/blagosds" className={styles.ruxyz}>
            Благотворительный Фонд СДС и ОУ.
          </Link>
          <Link href="/lights" className={styles.ruxyz}>
            Вернуться на главную.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
