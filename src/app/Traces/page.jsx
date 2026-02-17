import React from 'react'
import styles from './styles.module.css'
// import Link from 'next/link';

const Traces = () => {
  // const navigate = useNavigate()
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <div className={styles.wrappe}>
          Книга.
        </div>
      </div>
      {/* <button onClick={() => navigate(-1)} className={styles.button}>
        {"<--"}Назад
      </button> */}
    </div>
  );
}

export default Traces;