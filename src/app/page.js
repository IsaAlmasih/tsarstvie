import React from "react";
import stules from "./page.module.css";
import Link from "next/link";

// import { MatrixRain } from "./../components/MatrixRain/MatrixRain";

const page = () => {
  return (
    <div>
      <div className={stules.wrapper}>
        <Link href="/" className={stules.text}>
          Царствие.
        </Link>
      </div>
      {/* <MatrixRain></MatrixRain> */}
    </div>
  );
};

export default page;
