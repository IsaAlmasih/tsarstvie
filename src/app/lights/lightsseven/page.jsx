import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.text}>
          <div className={styles.textTsar}>
            28) И когда Он Снял седьмую печать, сделалось безмолвие на небе, как
            бы на полчаса. И я видел семь Ангелов, которые стояли перед
            Всевышним; и дано им семь труб. И пришёл иной Ангел, и стал перед
            жертвенником, держа золотую кадильницу; и дано было ему множество
            фимиама, чтобы он с молитвами всех святых возложил его на золотой
            жертвенник, который перед престолом.
          </div>
          <Link href="/lights">Седьмая печать.</Link>
          <Link href="/tsarstvie/1" className={styles.textTsar}>
            Вернуться на главную.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
