"use client";
import React from "react";
import styles from "./page.module.css";

import Link from "next/link";

import Clouds from "./Clouds/Clouds"
import logo from "./assets/kingdom.png";

const page = () => {
  return (
    <div className={styles.app}>
      <Clouds></Clouds>
      {/* Clouds from "./Clouds/Clouds"; */}
      {/* Название класса.className */}
      {/* <img src={logo} className={styles.Applogo} alt="logo" /> */}
      {/* <div className={styles.title}>כס דוד</div> */}
      <div className={styles.subtitle}>Царствие.</div>
      {/* Кнопка и её стили.  */}
      <Link href="/" className={styles.link}>
        {/* <button className={styles.button}>كتب الأقدار</button> */}
      </Link>
    </div>
  );
};

export default page;

// import { MatrixRain } from "./../components/MatrixRain/MatrixRain";

// const page = () => {
//   return (
//     <div>
//       <div className={stules.wrapper}>
//         <Link href="/" className={stules.text}>
//           Царствие.
//         </Link>
//       </div>
//       {/* <MatrixRain></MatrixRain> */}
//     </div>
//   );
// };

// export default page;
