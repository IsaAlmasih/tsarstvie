"use client";
import styles from "./styles.module.css";
import ImageViewer from "react-simple-image-viewer";

import logo from "../assets/Pho.png";

import { useCallback, useState } from "react";

import Image from "next/image";


export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

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
        {/* Дешевле и быстрей наносить клей нашими машинами. */}
      </div>
      </div>
  );
}
