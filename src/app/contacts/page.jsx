import React from "react";

import styles from "../contacts/styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.text}>
          <p2 className={styles.textTsar}>
            Благодарим за проявленный интерес. Для дальнейшего взаимопонимания
            просим ознакомиться с нашими взглядами на христианство ответив на
            подборку разных вопросов. Вопросы помогут вам понимать, вас мы ищем
            или вам нужен другой Иисус Назарянин.
            </p2>
            <a href={"tsarstvie/law/lawOne"} className={styles.textTsa}>
              Ответить.
            </a>
          <p className={styles.textTsar}>
            {" "}
            В ином случае пишите пожалуйста на эту почту. Кто вы и как видите
            свою лепту в строительство Царствия на земле.
          </p>
          <p className={styles.textTsa}> tsarstvie.ru@gmail.com</p>
          <Link href="/tsarstvie/law" className={styles.textTsar}>
            Вернуться на главную.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
