
import React from "react";

import { useNavigate } from "react";

import styles from "./styles.module.css";

const content={
  "1":{
    title: 'Заголовок 1'
  },
    "2":{
    title: 'Заголовок 2'
    },
}
// Под каждый id в именованном массиве заводить свой контент.

const page = async({params}) => {
  console.log(await params)
   const id = (await params).id
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <h1 className={styles.suwxz}>{content[id].title}</h1>
      </div>
      <button>
        <a href="/tsarstvie/law">На страницу назад</a>
      </button>
      {/* <button onClick={() => useNavigate(-1)} className={styles.button}>
        {"<--"}Назад
      </button> */}
    </div>
  );
};

export default page;
