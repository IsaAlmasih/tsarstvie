import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.Gridtext}>
          <div className={styles.text}>
            <div className={styles.textTsar}>
              <p>
                С данной страницы вы можете ознакомиться о разделении планеты на
                12 колен.
              </p>
              <p>Израиль, имя народа планеты!</p>
            </div>
            <Link href="/tribesisrael/tribesisraelreuben">
              Колено Рувимово.
            </Link>
            <Link href="/tribesisrael/tribesisraelsimeon">
              Колено Симеоново.
            </Link>
            <Link href="/tribesisrael/tribesisraellevi">Колено Левитов.</Link>
            <Link href="/tribesisrael/tribesisraeljudah">Колено Иудино.</Link>
            <Link href="/tribesisrael/tribesisraelnaphtali">
              Колено Неффалимова.
            </Link>
            <Link href="/tribesisrael/tribesisraelgad">Колено Гадово.</Link>
            <Link href="/tribesisrael/tribesisraelasher">Колено Асирово.</Link>
            <Link href="/tribesisrael/tribesisraelissachar">
              Колено Иссахарово.
            </Link>
            <Link href="/tribesisrael/tribesisraelzebulun">
              Колено Завулонову.
            </Link>
            <Link href="/tribesisrael/tribesisraeljoseph">
              Колено Иосифово.
            </Link>
            <Link href="/tribesisrael/tribesisraelbenjamin">
              Колено Вениаминово.
            </Link>
            <Link href="/tribesisrael/tribesisraeldan">Колено Даново.</Link>
            <Link href="/tsarstvie" className={styles.textTsar}>
              Вернуться на главную.
            </Link>
          </div>
          <div className={styles.text}>
            <div className={styles.textTsar}>
              <p>
                On this page, you can learn about the division of the planet
                into 12 tribes.
              </p>
              <p>Israel—that's the name of the people of the planet!</p>
            </div>
            <Link href="/tribesisrael/tribesisraelreuben">
              The tribe of Reuben.
            </Link>
            <Link href="/tribesisrael/tribesisraelsimeon">
              The tribe of Simeon.
            </Link>
            <Link href="/tribesisrael/tribesisraellevi">
              {" "}
              The tribe of Levites.
            </Link>
            <Link href="/tribesisrael/tribesisraeljudah">
              {" "}
              The tribe of Judah.
            </Link>
            <Link href="/tribesisrael/tribesisraelnaphtali">
              The tribe of Naphtali.
            </Link>
            <Link href="/tribesisrael/tribesisraelgad"> The tribe of Gad.</Link>
            <Link href="/tribesisrael/tribesisraelasher">
              {" "}
              The tribe of Asher.
            </Link>
            <Link href="/tribesisrael/tribesisraelissachar">
              The tribe of Issachar.
            </Link>
            <Link href="/tribesisrael/tribesisraelzebulun">
              The tribe of Zebulun.
            </Link>
            <Link href="/tribesisrael/tribesisraeljoseph">
              The tribe of Joseph.
            </Link>
            <Link href="/tribesisrael/tribesisraelbenjamin">
              The tribe of Benjamin.
            </Link>
            <Link href="/tribesisrael/tribesisraeldan"> The tribe of Dan.</Link>
            <Link href="/tsarstvie" className={styles.textTsar}>
              Return to the main page.
            </Link>
          </div>
          <div className={styles.text}>
            <div className={styles.textTsar}>
              <p>
                في هذه الصفحة، يمكنك التعرف على تقسيم كوكب الأرض إلى اثنتي عشرة
                قبيلة.
              </p>
              <p>إسرائيل - هذا هو اسم شعب الأرض!</p>
            </div>
            <Link href="/tribesisrael/tribesisraelreuben">سبط رأوبين.</Link>
            <Link href="/tribesisrael/tribesisraelsimeon">سبط شمعون.</Link>
            <Link href="/tribesisrael/tribesisraellevi">سبط اللاويين.</Link>
            <Link href="/tribesisrael/tribesisraeljudah">سبط يهوذا.</Link>
            <Link href="/tribesisrael/tribesisraelnaphtali">سبط نفتالي.</Link>
            <Link href="/tribesisrael/tribesisraelgad">سبط جاد.</Link>
            <Link href="/tribesisrael/tribesisraelasher">سبط أشير.</Link>
            <Link href="/tribesisrael/tribesisraelissachar">سبط يساكر.</Link>
            <Link href="/tribesisrael/tribesisraelzebulun">سبط زبولون.</Link>
            <Link href="/tribesisrael/tribesisraeljoseph">سبط يوسف.</Link>
            <Link href="/tribesisrael/tribesisraelbenjamin">سبط بنيامين.</Link>
            <Link href="/tribesisrael/tribesisraeldan">سبط دان.</Link>
            <Link href="/tsarstvie" className={styles.textTsar}>
              العودة إلى الصفحة الرئيسية.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
