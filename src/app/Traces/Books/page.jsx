import styles from "./styles.module.css"
import Link from 'next/link';

const Char = ({ value, x, y, speed }) => {
  const [yPos, setYPos] = useState(y);

  useEffect(() => {
    const interval = setInterval(() => {
      setYPos((yPos) => {
        const newYPos = yPos > window.innerHeight ? 0 : yPos + speed;
        return newYPos;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [speed]);

  const flick = Math.random() * 100;
  const char = flick < 10 ? 0 : value;

  return (
    <span
      style={{ fontSize:"10px", position: "absolute", left: x, top: yPos, color: "#0000FF" }}
    >
      {char}
    </span>
  );
};

const Stream = ({ text, x }) => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    const y = Math.floor(Math.random() * text.length);
    const speed = Math.floor(Math.random() * 6) + 3;
    const charArray = [];

    for (let i = text.length - 1; i >= 0; i--) {
      charArray.push({ value: text[i], y: (y + text.length - i) * 20, speed });
    }

    setChars(charArray);
  }, [text]);

  return (
    <>
      {chars.map((char, index) => (
        <Char
          key={index}
          value={char.value}
          x={x}
          y={char.y}
          speed={char.speed}
        />
      ))}
    </>
  );
};

// const MatrixRain = () => {
//   const [streams, setStreams] = useState([]);
//   const createStreams = () => {
//     const streamArray = [];

//     for (let i = 0; i < window.innerWidth; i += 20) {
//       streamArray.push({
//         text: langs[Math.floor(Math.random() * langs.length)],
//         x: i,
//       });
//     }

//     setStreams(streamArray);
//   };
//   useEffect(() => {
//     createStreams();
//   }, []);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         overflow: "hidden",
//       }}
//     >
//       {streams.map((stream, index) => (
//         <Stream key={index} text={stream.text} x={stream.x} />
//       ))}
//     </div>
//   );
// };

const Books = () => {
  // const navigate = navigate();
  return (
    <div className={styles.wrapper}>
      <Link href={"/"}>Папирус Формат А1</Link>
      <Link href={"/"}>Папирус Формат А2</Link>
      <Link href={"/"}>Папирус Формат А3</Link>
      <Link href={"/"}>Папирус Формат А4</Link>
      <Link href={"/"}>Книги из папируса.</Link>
      <Link href={"/"}>Свитки.</Link>
      {/* <MatrixRain></MatrixRain> */}

      {/* <button onClick={() => navigate(-1)} className={styles.button}>
        {"<--"}Назад
      </button> */}
    </div>
  );
}
