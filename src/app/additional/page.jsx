"use client";
import React from "react";

import styles from "../additional/styles.module.css";

import Link from "next/link";

export default function additional() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.textTsa}>
          <h1 className={styles.textTs}>
            Мир тебе, благословенный. Я Иисус, Бог твой Иду к тебе с Новым
            Именем. Моё Новое Имя — Исав. Я, Исав, твой Бог, Говорю вам. В
            городе Моего дома, в Земле Обетованной, Я Дал разбойнику: заповеди,
            Вечный завет, Завет мира. Дал разбойнику книгу "Ключи" благословив
            переписать книгу "Ключи" на листы библии. Я показал разбойнику
            скинию. Показал Мой дом — престол Давида, сей Дом есть книга первого
            воскрешения. Я показал разбойнику ковчег завета. Я послал разбойника
            на Патмос, чтобы он взял послания семи церквам у Иоанна. Я повелел
            разбойнику передать послания ангелам в семи церквях. Говорю вам:
            слушайте, что говорит вам разбойник, ибо разбойник говорит Волю Мою.
            Кто говорит разбойнику слово, тот говорит Мне. Говорю вам:
            разбойник, зерно должен быть брошен в землю, в землю Моей матери.
            Помогите ему взять ключи у Петра. Я Исав, показал разбойнику ключи в
            земле матери Моей. До Моего прихода, ключи хранятся у колена
            Неффалимова народа
          </h1>
          <div className={styles.wrapp}>
            <Link href="/commandments/1">Заповеди</Link>
            <Link href="/tsarstvie/law">Послания</Link>
            <Link href="/tsarstvie/almasih">Престол Давида</Link>
            <Link href="/tsarstvie/churches">Семь церквей</Link>
            {/* <Link href="https://www.supremesanhedrin.ru/">Пятая</Link> */}
            <Link href="/lights">Светильники</Link>
            <Link href="/tribesisrael/1">12 Колен</Link>
            <Link href="/verdict">Вердикты</Link>
          </div>
        </div>
        <button className={styles.buеton}>
          <a href="/">На главную. </a>
        </button>
      </div>
    </div>
  );
}
