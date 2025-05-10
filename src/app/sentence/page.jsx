"use client";
import React, { useRef, useState } from 'react'

import styles from './styles.module.css'
// import { Link } from 'next/link';

import ImageWithModal from '@/components/ImageWithModal/ImageWithModal';
import imag from './154.jpg';
import imag1 from "./11111.jpg";
// import { MatrixRain } from '@/components/MatrixRain/MatrixRain';

const Page = () => {
  const [isOpen1,setIsOpen1]=useState(false)
  return (
    <div className={styles.wrapper}>
      <div className={styles.imges}>
        {/* <img src={imag1.src} ref={img1} onClick={()=>onClick()} /> */}
        {/* <img src={imag.src} /> */}
        <ImageWithModal
          src={imag.src}
          alt={"Книга Вечный Завет"}
          width={300}
          height={400}
        />
        <ImageWithModal
          src={imag1.src}
          alt={"Книга Ключи"}
          width={300}
          height={400}
        />
      </div>
      <div className={styles.wrappe}>
        <a href="112.pdf">Книга Вечный Завет.</a>
        <a href="112.pdf">Книга Ключи.</a>
        <a href="/tsarstvie">Вернутся на главную.</a>
      </div>
    </div>
  );
}
export default Page