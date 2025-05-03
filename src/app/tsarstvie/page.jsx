import React from 'react'

import styles from "./styles.module.css"
import Link from 'next/link'

const page = () => {
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.blok}> */}
        <Link href="/">Наступает Царствие на землю.</Link>
        <Link href="/dogmats">
          Настоятельно прошу ознакомиться с истинными догматами
          Христианской церкви!
        </Link>
      </div>
    // </div>
  );
}

export default page