"use client";
import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";
import { verdicts } from "@/data/verdicts";
import { useParams } from "next/navigation";
import { books } from "@/data/books";

const page = () => {
  const { id } = useParams();
  const verdict=verdicts.find((verdict) => verdict.id == id)
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        {/* <h1>Книги вердикта:{verdict.title}</h1> */}
        <div className={styles.footerText}>
          {books.filter((book) => verdict.books.includes(book.id)).map((book) => (
              <Link key={book.id} href={`/verdict/${id}/books/${book.id.toString()}`}>
                {book.title}
              </Link>
            ))}
          <Link href={`/verdict/${id}`}>Вернуться назад.</Link>
        </div>
      </div>
    </div>
  );
};

export default page;
