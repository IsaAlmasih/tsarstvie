"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "../../additionalArabi/questionArabiOne/styles.module.css";

export default function Questions() {
  const router = useRouter();

  const [answers, setAnswers] = useState({
    q1: "لا", // или "لا", чтобы по умолчанию было выбрано что-то
    q2: "لا",
    q3: "لا",
    q4: "لا",
    q5: "لا",
    q6: "لا",
    q7: "لا",
    q8: "لا",
    q9: "لا",
    q10: "لا",
  });

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      answers.q1 === "لا" &&
      answers.q2 === "لا" &&
      answers.q3 === "نعم" &&
      answers.q4 === "نعم" &&
      answers.q5 === "نعم" &&
      answers.q6 === "نعم" &&
      answers.q7 === "نعم" &&
      answers.q8 === "نعم" &&
      answers.q9 === "نعم" &&
      answers.q10 === "نعم"
    ) {
      // Правильный ответ - переходим на страницу
      router.push("/additional");
    } else {
      alert("إجابات خاطئة، حاول مرة أخرى!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <div className={styles.blok}>
          <div className={styles.blo}>
            <div className={styles.gridblok}>
              <div className={styles.text}>
                <label>Вопрос 1. Первой</label>
                <input
                  name="q1"
                  value={answers.q1}
                  onChange={handleChange}
                  placeholder="أجب عن السؤال"
                />
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="نعم"
                    checked={answers.q1 === "نعم"}
                    onChange={handleChange}
                  />
                  نعم
                </label>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="لا"
                    checked={answers.q1 === "لا"}
                    onChange={handleChange}
                  />
                  لا
                </label>
              </div>
              <div className={styles.text}>
                <label>
                  Вопрос 2. Как вы считаете, разведённые без вины прелюбодеяния,
                  имеют шанс обрести Христа?
                </label>
                <input
                  name="q2"
                  value={answers.q2}
                  onChange={handleChange}
                  placeholder="أجب عن السؤال"
                />
                <label>
                  <input
                    type="radio"
                    name="q2"
                    value="نعم"
                    checked={answers.q2 === "نعم"}
                    onChange={handleChange}
                  />
                  نعم
                </label>
                <label>
                  <input
                    type="radio"
                    name="q2"
                    value="لا"
                    checked={answers.q2 === "لا"}
                    onChange={handleChange}
                  />
                  لا
                </label>
              </div>
              <div className={styles.text}>
                <label>
                  السؤال الثالث: هل تعتقد أن مصير أطفالك يعتمد على مدى خطورة
                  ذنوبك؟
                </label>
                <input
                  name="q3"
                  value={answers.q3}
                  onChange={handleChange}
                  placeholder="الجواب على السؤال ٣"
                />
                <label>
                  <input
                    type="radio"
                    name="q3"
                    value="نعم"
                    checked={answers.q3 === "نعم"}
                    onChange={handleChange}
                  />
                  نعم
                </label>
                <label>
                  <input
                    type="radio"
                    name="q3"
                    value="لا"
                    checked={answers.q3 === "لا"}
                    onChange={handleChange}
                  />
                  لا
                </label>
              </div>
              <div className={styles.text}>
                <label>
                  السؤال الرابع: هل توافق على القول بأن الإفراط في الملذات أو
                  الاستمناء يتعارض مع تعاليم المسيح؟
                </label>
                <input
                  name="q4"
                  value={answers.q4}
                  onChange={handleChange}
                  placeholder="أجب عن السؤال"
                />
                <label>
                  <input
                    type="radio"
                    name="q4"
                    value="نعم"
                    checked={answers.q4 === "نعم"}
                    onChange={handleChange}
                  />
                  نعم
                </label>
                <label>
                  <input
                    type="radio"
                    name="q4"
                    value="لا"
                    checked={answers.q4 === "لا"}
                    onChange={handleChange}
                  />
                  لا
                </label>
              </div>
              <div className={styles.text}>
                <label>
                  هل توافق على أن قصة آدم وحواء هي التاريخ الخفي لملايين السنين
                  من التطور؟
                </label>
                <input
                  name="q5"
                  value={answers.q5}
                  onChange={handleChange}
                  placeholder="أجب عن السؤال"
                />
                <label>
                  <input
                    type="radio"
                    name="q5"
                    value="نعم"
                    checked={answers.q5 === "نعم"}
                    onChange={handleChange}
                  />
                  نعم
                </label>
                <label>
                  <input
                    type="radio"
                    name="q5"
                    value="لا"
                    checked={answers.q5 === "لا"}
                    onChange={handleChange}
                  />
                  لا
                </label>
              </div>
              <div className={styles.text}>
                <label>
                  السؤال السادس: هل تفهم أن قيصر = أمير = قيصر = رئيس = فرعون =
                  بطريرك = شيطان؟
                </label>
                <input
                  name="q6"
                  value={answers.q6}
                  onChange={handleChange}
                  placeholder="أجب عن السؤال"
                />
                <label>
                  <input
                    type="radio"
                    name="q6"
                    value="نعم"
                    checked={answers.q6 === "نعم"}
                    onChange={handleChange}
                  />
                  نعم
                </label>
                <label>
                  <input
                    type="radio"
                    name="q6"
                    value="لا"
                    checked={answers.q6 === "لا"}
                    onChange={handleChange}
                  />
                  لا
                </label>
              </div>
              <div className={styles.text}>
                <label>
                  السؤال السابع: هل توافق على أن الله القدير والمسيح شخص واحد؟
                </label>
                <input
                  name="q7"
                  value={answers.q7}
                  onChange={handleChange}
                  placeholder="أجب عن السؤال"
                />
                <label>
                  <input
                    type="radio"
                    name="q7"
                    value="نعم"
                    checked={answers.q7 === "نعم"}
                    onChange={handleChange}
                  />
                  نعم
                </label>
                <label>
                  <input
                    type="radio"
                    name="q7"
                    value="لا"
                    checked={answers.q7 === "لا"}
                    onChange={handleChange}
                  />
                  لا
                </label>
              </div>
              <div className={styles.text}>
                <label>
                  السؤال الثامن: هل تفهم أن الخمر في الاعتراف ليس دماً، بل كحول؟
                </label>
                <input
                  name="q8"
                  value={answers.q8}
                  onChange={handleChange}
                  placeholder="أجب عن السؤال"
                />
                <label>
                  <input
                    type="radio"
                    name="q8"
                    value="نعم"
                    checked={answers.q8 === "نعم"}
                    onChange={handleChange}
                  />
                  نعم
                </label>
                <label>
                  <input
                    type="radio"
                    name="q8"
                    value="لا"
                    checked={answers.q8 === "لا"}
                    onChange={handleChange}
                  />
                  لا
                </label>
              </div>
              <div className={styles.text}>
                <label>
                  السؤال التاسع: هل توجد أي معايير لاستهلاك الكحول بالنسبة
                  لأتباع المسيح؟
                </label>
                <input
                  name="q9"
                  value={answers.q9}
                  onChange={handleChange}
                  placeholder="أجب عن السؤال"
                />
                <label>
                  <input
                    type="radio"
                    name="q9"
                    value="نعم"
                    checked={answers.q9 === "نعم"}
                    onChange={handleChange}
                  />
                  نعم
                </label>
                <label>
                  <input
                    type="radio"
                    name="q9"
                    value="لا"
                    checked={answers.q9 === "لا"}
                    onChange={handleChange}
                  />
                  لا
                </label>
              </div>
              <div className={styles.text}>
                <label>السؤال العاشر: هل تدرك أن عالمك هو نتيجة لسلوكك؟</label>
                <input
                  name="q10"
                  value={answers.q10}
                  onChange={handleChange}
                  placeholder="أجب عن السؤال"
                />
                <label>
                  <input
                    type="radio"
                    name="q10"
                    value="نعم"
                    checked={answers.q10 === "نعم"}
                    onChange={handleChange}
                  />
                  نعم
                </label>
                <label>
                  <input
                    type="radio"
                    name="q10"
                    value="لا"
                    checked={answers.q10 === "لا"}
                    onChange={handleChange}
                  />
                  لا
                </label>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className={styles.buttonLaw}>
          أجيب
        </button>
      </div>
    </form>
  );
}
