import React from "react";

import styles from "../[id]/styles.module.css";
import { title } from "process";
import Link from "next/link";


const content = {
  1: {
    iptvz: "Колено Рувимово.",
    iptwx: "Колено Симеоново.",
    iptwy: "Колено Левитов.",
    iptwz: "Колено Иудино.",
    iptxy: "Колено Неффалимова.",
    iptxz: "Колено Гадово.",
    iptyz: "Колено Асирово.",
    ipuvx: "Колено Иссахарово.",
    ipuvy: "Колено Завулонову.",
    ipuvw: "Колено Иосифово.",
    ipuvz: "Колено Вениаминово.",
    ipuwx: "Колено Даново.",
  },
  2: {
    ipuwy: "The tribe of Reuben.",
    ipuwz: "The tribe of Simeon.",
    ipuxy: "The tribe of Levites.",
    ipuxz: "The tribe of Judah.",
    ipuyz: "The tribe of Naphtali.",
    ipvwx: "The tribe of Gad.",
    ipvwy: "The tribe of Asher.",
    ipvwz: "The tribe of Issachar.",
    ipvxy: "The tribe of Zebulun.",
    ipvxz: "The tribe of Joseph.",
    ipvyz: "The tribe of Benjamin.",
    ipwxy: "The tribe of Dan.",
  },
  3: {
  ipwxz: "سبط رأوبين.",
  ipwyz: "سبط شمعون.",
  ipxyz: "سبط اللاويين.",
  iqrst: "سبط يهوذا.",
  iqrsu: "سبط نفتالي.",
  iqrsv: "سبط جاد.",
  iqrsw: "سبط أشير.",
  iqrsx: "سبط يساكر.",
  iqrsy: "سبط زبولون.",
  iqrsz: "سبط يوسف.",
  iqrtu: "سبط بنيامين.",
  iqrtv: "سبط دان.",
  },
};

const page = async({params}) => {
  console.log(await params)
  const id = (await params).id
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.wrapp}>
          <div className={styles.wrappBlokTriRu}>
            <div className={styles.wrappBloRu}>
              <Link href="/tribesisrael/tribesisraelreuben">
                {content[id].iptvz}
              </Link>
              <Link href="/tribesisrael/tribesisraelsimeon">
                {content[id].iptwx}
              </Link>
              <Link href="/tribesisrael/tribesisraellevi">
                {content[id].iptwy}
              </Link>
              <Link href="/tribesisrael/tribesisraeljudah">
                {content[id].iptwz}
              </Link>
              <Link href="/tribesisrael/tribesisraelnaphtali">
                {content[id].iptxy}
              </Link>
              <Link href="/tribesisrael/tribesisraelgad">
                {content[id].iptxz}
              </Link>
              <Link href="/tribesisrael/tribesisraelasher">
                {content[id].iptyz}
              </Link>
              <Link href="/tribesisrael/tribesisraelissachar">
                {content[id].ipuvx}
              </Link>
              <Link href="/tribesisrael/tribesisraelzebulun">
                {content[id].ipuvy}
              </Link>
              <Link href="/tribesisrael/tribesisraeljoseph">
                {content[id].ipuvw}
              </Link>
              <Link href="/tribesisrael/tribesisraelbenjamin">
                {content[id].ipuvz}
              </Link>
              <Link href="/tribesisrael/tribesisraeldan">
                {content[id].ipuwx}
              </Link>
            </div>
          </div>
          <div className={styles.wrappBlokTriAm}>
            <div className={styles.wrappBlokSh}>
              <Link href="/tribesisrael/tribesisraelreuben">
                {content[id].ipuwy}
              </Link>
              <Link href="/tribesisrael/tribesisraelsimeon">
                {content[id].ipuwz}
              </Link>
              <Link href="/tribesisrael/tribesisraellevi">
                {content[id].ipuxy}
              </Link>
              <Link href="/tribesisrael/tribesisraeljudah">
                {content[id].ipuxz}
              </Link>
              <Link href="/tribesisrael/tribesisraelnaphtali">
                {content[id].ipuyz}
              </Link>
              <Link href="/tribesisrael/tribesisraelgad">
                {content[id].ipvwx}
              </Link>
              <Link href="/tribesisrael/tribesisraelasher">
                {content[id].ipvwy}
              </Link>
              <Link href="/tribesisrael/tribesisraelissachar">
                {content[id].ipvwz}
              </Link>
              <Link href="/tribesisrael/tribesisraelzebulun">
                {content[id].ipvxy}
              </Link>
              <Link href="/tribesisrael/tribesisraeljoseph">
                {content[id].ipvxz}
              </Link>
              <Link href="/tribesisrael/tribesisraelbenjamin">
                {content[id].ipvyz}
              </Link>
              <Link href="/tribesisrael/tribesisraeldan">
                {content[id].ipwxy}
              </Link>
            </div>
          </div>
          <div className={styles.wrappBlokTriAr}>
            <div className={styles.wrappBlokAr}>
              <Link href="/tribesisrael/tribesisraelreuben">
                {content[id].ipwxz}
              </Link>
              <Link href="/tribesisrael/tribesisraelsimeon">
                {content[id].ipwxy}
              </Link>
              <Link href="/tribesisrael/tribesisraellevi">
                {content[id].ipxyz}
              </Link>
              <Link href="/tribesisrael/tribesisraeljudah">
                {content[id].iqrst}
              </Link>
              <Link href="/tribesisrael/tribesisraelnaphtali">
                {content[id].iqrsu}
              </Link>
              <Link href="/tribesisrael/tribesisraelgad">
                {content[id].iqrsv}
              </Link>
              <Link href="/tribesisrael/tribesisraelasher">
                {content[id].iqrsw}
              </Link>
              <Link href="/tribesisrael/tribesisraelissachar">
                {content[id].iqrsx}
              </Link>
              <Link href="/tribesisrael/tribesisraelzebulun">
                {content[id].iqrsy}
              </Link>
              <Link href="/tribesisrael/tribesisraeljoseph">
                {content[id].iqrsz}
              </Link>
              <Link href="/tribesisrael/tribesisraelbenjamin">
                {content[id].iqrtu}
              </Link>
              <Link href="/tribesisrael/tribesisraeldan">
                {content[id].iqrtv}
              </Link>
            </div>
          </div>
          <button className={styles.buttonComma}>
            <a href="/">На страницу назад.</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;