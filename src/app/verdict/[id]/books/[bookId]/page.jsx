"use client"
import React from 'react'
import styles from "./styles.module.css"
import HTMLFlipBook from 'react-pageflip';
import { useParams } from 'next/navigation';
import { verdicts } from '@/data/verdicts';
import { books } from '@/data/books';
import Link from 'next/link';

const Book = () => {
  const { id,bookId } = useParams();
  const verdict=verdicts.find((verdict) => verdict.id == id)
  const book=books.find((book)=> book.id == bookId)
  return (
    <div className={styles.wrapper}>
      <HTMLFlipBook width={430} height={600} className={styles.book}>
        {book.text.map((page) => (
          <div key={page}>{page}</div>
        ))}
      </HTMLFlipBook>
      <Link href={`/verdict/${id}/books`}>Вернуться назад.</Link>
    </div>
  );
}

export default Book