import React from "react";

import styles from "../[id]/styles.module.css";
import { title } from "process";
import Link from "next/link";


const content = {
  1: {
    rstwz: "Заповеди Иисуса Христа.",
    qsuvz: "Закон Всевышнего Иисуса Христа.",
    qtvxy: "Престол Давида.",
    qtvxz: "Семь церквей",
    qtvyz: "Синедрион",
    qtwxy: "Светильники",
    qtwxz: "12 колен Израиля",
    qtwyz: "Вердикты",
  },
  2: {
    rsvxy: "The Commandments of Jesus Christ.",
    qvwxy: "The Law of the Most High Jesus Christ.",
    qvwxz: "The Throne of David.",
    qvwyz: "Churches",
    qvxyz: "The Sanhedrin.",
    qwxyz: "Lampstands.",
    rstuv: "The 12 Tribes of Israel.",
    rstuw: "Verdicts.",
  },
  3: {
    rvwxy: "وصايا يسوع المسيح.",
    rsvxz: "شريعة يسوع المسيح العليّ.",
    rsvyz: "عرش داود.",
    rswxy: "الكنائس.",
    rswxz: "السنهدريم.",
    rswyz: "المنائر.",
    rsxyz: "أسباط إسرائيل الاثنا عشر.",
    rtuvw: "الأحكام.",
  },
};

const page = async({params}) => {
  console.log(await params)
  const id = (await params).id
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.wrapp}>
          <div className={styles.wrappBlokRossia}>
            <div className={styles.wrappBlokRu}>
              <Link href="/commandments/1">{content[id].rstwz}</Link>
              <Link href="/tsarstvie/law">{content[id].qsuvz}</Link>
              <Link href="/tsarstvie/almasih">{content[id].qtvxy}</Link>
              <Link href="/tsarstvie/churches">{content[id].qtvxz}</Link>
              <Link href="https://www.supremesanhedrin.ru/">
                {content[id].qtvyz}
              </Link>
              <Link href="/lights">{content[id].qtwxy}</Link>
              <Link href="/tribesisrael/1">{content[id].qtwxz}</Link>
              <Link href="/verdict">{content[id].qtwyz}</Link>
            </div>
          </div>
          <div className={styles.wrappBlokAmeri}>
            <div className={styles.wrappBlokSha}>
              <Link href="/commandments/3">{content[id].rsvxy}</Link>
              <Link href="/tsarstvie/lawSha">{content[id].qvwxy}</Link>
              <Link href="/tsarstvie/jesusChrist">{content[id].qvwxz}</Link>
              <Link href="/tsarstvie/churches">{content[id].qvwyz}</Link>
              <Link href="https://www.supremesanhedrin.ru/">
                {content[id].qvxyz}
              </Link>
              <Link href="/lights">{content[id].qwxyz}</Link>
              <Link href="/tribesisrael/2">{content[id].rstuv}</Link>
              <Link href="/verdict">{content[id].rstuw}</Link>
            </div>
          </div>
          <div className={styles.wrappBlokArabic}>
            <div className={styles.wrappBlokArab}>
              <Link href="/commandments/2">{content[id].rvwxy}</Link>
              <Link href="/tsarstvie/lawArab">{content[id].rsvxz}</Link>
              <Link href="/tsarstvie/isaAlmasih">{content[id].rsvyz}</Link>
              <Link href="/tsarstvie/churches">{content[id].rswxy}</Link>
              <Link href="https://www.supremesanhedrin.ru/">
                {content[id].rswxz}
              </Link>
              <Link href="/lights">{content[id].rswyz}</Link>
              <Link href="/tribesisrael/3">{content[id].rsxyz}</Link>
              <Link href="/verdict">{content[id].rtuvw}</Link>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.buttonComma}>
        <a href="/">На страницу назад.</a>
      </button>
    </div>
  );
};
export default page;