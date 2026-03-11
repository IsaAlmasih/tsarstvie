import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.text}>
          <p2 className={styles.textTsar}>
            Для дальнейшего прохода необходимо пройти тест. Мы хотим понимать
            излечима ли ваша болезнь или вы раб своих иллюзий{" "}
            <a href={"tsarstvie/law/lawOne"} className={styles.textTsa}>
              Ответить.
            </a>
          </p2>
          <p className={styles.textTsar}>tsarstvie.ru@gmail.com</p>
          <Link href="/tsarstvie" className={styles.textTsar}>
            Вернуться на главную.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
