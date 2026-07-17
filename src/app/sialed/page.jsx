"use client";

import { useState } from "react";

import styles from "../sialed/styles.module.css"

export default function Home() {
  const [input, setInput] = useState("");
  const [characteristic, setCharacteristic] = useState("");

  const ranks = {
    Человек: "Общительный и дружелюбный",
    Монах: "Ответственный и амбициозный",
    Десятник: "Организованный и целеустремленный",
    Пятидесятник: "Лидерский и уверенный",
    Сотник: "Стратегический и решительный",
    Тысячник: "Мудрый и вдохновляющий",
    Десятитысячник: "Могущественный и влиятельный",
    Стотысячник: "Мудрый судья, справедливый",
  };

  const handleCheck = () => {
    const inputTrimmed = input.trim();
    if (ranks[inputTrimmed]) {
      setCharacteristic(ranks[inputTrimmed]);
    } else {
      setCharacteristic("Ранг не найден. Попробуйте ввести правильно.");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrappe}>
        <div>
          <h1>
            С данной страницы вы можете узнать совпадает ваш образ жизни с
            образом жизни, который нам нужен в Царствии.{" "}
          </h1>
          <h1>Выберите кем вы себя считаете, введите имя из списка ниже.</h1>
          <h2>1) Человек.</h2>
          <h2>2) Монах.</h2>
          <h2>3) Десятник.</h2>
          <h2>4) Пятидесятник.</h2>
          <h2>5) Сотник.</h2>
          <h2>6) Тысячник.</h2>
          <h2>7) Десятитысячник.</h2>
          <h2>8) Стотысячник.</h2>

          <input
            type="text"
            placeholder="Введите ранг"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ marginRight: "16px" }}
          />
          <button onClick={handleCheck}>Проверить</button>
          {characteristic && (
            <div style={{ marginTop: "20px" }}>
              <strong>Ранг:</strong> {input.trim()}
              <br />
              <strong>Характеристика:</strong> {characteristic}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
