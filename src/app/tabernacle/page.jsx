"use client";
import styles from "../tabernacle/styles.module.css";
import ImageViewer from "react-simple-image-viewer";

import logo from "../assets/tabernacle/000.jpg";

import img1 from "../assets/tabernacle/000.jpg";
import img2 from "../assets/tabernacle/000000001101.jpg";
import img3 from "../assets/tabernacle/11_1.png";
import img5 from "../assets/tabernacle/2.jpg";
import img6 from "../assets/tabernacle/3.jpg";
import img7 from "../assets/tabernacle/45jpg.jpg";
import img8 from "../assets/tabernacle/55jpg.jpg";
import img10 from "../assets/tabernacle/5jpg.jpg";
// import img15 from "../assets/tabernacle/000.jpg";
// import img12 from "../assets/tabernacle/000.jpg";
// import img13 from "../assets/tabernacle/000.jpg";
// import img14 from "../assets/tabernacle/000.jpg";

import { useCallback, useState } from "react";

import Image from "next/image";

import img11 from "../assets/logo.svg";
import img16 from "../assets/tabernacle/logo.svg";
import Link from "next/link";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    // img15.src,
    // img12.src,
    // img13.src,
    // img14.src,
    img10.src,
    img1.src,
    img2.src,
    img3.src,
    img5.src,
    img6.src,
    img7.src,
    img8.src,
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        {" "}
        <img src={logo.src} />
        Дешевле и быстрей наносить клей нашими машинами.
      </div>
      <div className={styles.section}>
        {/* <div className={styles.contacts}>
          <div>
            <a
              href={
                "https://www.google.com/maps/search/119071,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,%20%D1%83%D0%BB%20%D0%9E%D1%80%D0%B4%D0%B6%D0%BE%D0%BD%D0%B8%D0%BA%D0%B8%D0%B4%D0%B7%D0%B5,%2010,"
              }
            >
              000000, М, ул ,  ()
            </a>
          </div>
          <div>
            Тел: <a href={"tel:+79774240079"}>+7(000)00-00-00 (WhatsApp)</a>
          </div>
          <div>
            email:
            <a href={"mailto:info@sharov-tech.com"}> 23</a>
          </div>
        </div> */}
        <div className={styles.about}>
          <h2>Добро пожаловать на наш сайт!</h2>
          <p>
Сегодня 21.02.2014 год. Время 19.00 мск, начато проектирование в специлизированных программах проекта по возведению скинии в земле обетованной. И прошу заметить, Обетованной. Той, обетованной которая считается истино обетованная, а не то, что вы себе придумали безосновательно.
И так!
Скиния.
Пока только есть только каркас из брёвен.
3 бревна по 8.88 метров высотой.
60 брёвен по 2.22 метров высотой.
53 бревна по 4.44 метров высотой.
6 брёвен по 6.66 метров высотой.
Плюсом надо учитывать, по мимо столбов, 
есть ещё шипы на которые вешаются одеяла. 
Одни из золота, из меди. 
Есть ещё подножия. И сами одеяла.
          </p>
          <ul>
            <li>
              Мые оборудование.
            </li>
            <li>
              Используем .
            </li>
            <li>
              Осуществляем .
            </li>
          </ul>
        </div>
        <div className={styles.photos}>
          {images.map((src, index) => (
            <img
              src={src}
              onClick={() => openImageViewer(index)}
              width="300"
              key={index}
              style={{ margin: "2px" }}
              alt=""
            />
          ))}

          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              onClose={closeImageViewer}
              disableScroll={false}
              backgroundStyle={{
                backgroundColor: "rgba(0,0,0,0.9)",
              }}
              style={{
                padding: "60px",
              }}
              closeOnClickOutside={true}
            />
          )}
        </div>
        <div className={styles.about}>
          <h2> : МКМ39 и МКМ59</h2>
          <p>
            
            разницей, что увеличена ширина нанесения клея.
          </p>
        </div>
        <div className={styles.aboutTex}>
          <h3>Технические характеристики:</h3>
          <ul>
            <li> ширина: МКМ39 – 390 – 590 мм.</li>
            <li> клеевого  – нижнее</li>
            <li>/приёмка листов – вручную</li>
            <li> – 220В</li>
            <li> – 580х250х130</li>
            <li>Вес:   кг.,  – 12 кг.</li>
            <li> МКМ39 , МКМ59 — 65000 руб.</li>
          </ul>

          <div className={styles.video}>
            <h2>Видео места</h2>
            <iframe
              width="720"
              height="405"
              src="https://rutube.ru/play/embed/59ed7d58c1b327282743d5f1a12da5e2/"
              allow="clipboard-write; autoplay"
            ></iframe>
          </div>
        </div>
        <div className={styles.feedback}>
          <h2>Наше сообщество.</h2>
          <Link href="https://000000000000.ru/">
            <Image src={img11} width={100} height={100} alt="logoOne" />
          </Link>
          <h2>
            <a href="/tsarstvie/almasih/gallery">Варнуться назад.</a>
          </h2>
        </div>
        <div className={styles.feedback}></div>
        {/* <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A590e57a4b7be241dc451428b14f86ef59816a8888cea70038fb858f36b1a71e4&amp;source=constructor"
          width="100%"
          height="400"
          frameBorder="0"
        ></iframe>
        {/* Подвал */}
        <footer className={styles.footer}>
          {/*Препроцессор. Что это */}

          {/* Stylus, ++++(SASS/SCSS) - надо разобрать!!!!! */}

          {/* БЭМ - методология БЛОК-ЭЛЕМЕНТ-МОДИФИКАТОР */}
          {/* <footer className="footer">
                <div className="footer__col">
                    <a className="footer__col-link footer__col-link_active">
                    </a>
                    <a className="footer__col-link">
                    </a>
                    <a className="footer__col-link">
                    </a>
                </div>
          </footer> */}

          {/* Левая колонка */}
          <div className={styles.footerCol}>
            <a href="\">
              <Image
                className={styles.footerLogo}
                src={img16}
                width={60}
                height={50}
                alt="logoOne"
              />
            </a>
            <h3 className={styles.footerHeading}>Реквизиты:</h3>
            <div className={styles.footerGroup}>
              <p className={styles.footerText}>ИНН 000000000</p>
              <p className={styles.footerText}>КПП 000000000</p>
              <p className={styles.footerText}>
                БИГ БАНКА 0000000000
              </p>
              <p className={styles.footerText}>
                РАСЧЁТНЫЙ СЧЕТ 00000000000000000000
              </p>
              <p className={styles.footerText}>КОР СЧЕТ 00000000000000000000</p>
              <p className={styles.footerText}>ТЕЛ: +7(000)000-00-00</p>
            </div>
          </div>

          {/* Правая колонка */}
          <div className={styles.footerCol}>
            <a href={"/"}>SEO Продвижение.</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
