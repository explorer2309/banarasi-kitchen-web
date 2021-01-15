import Head from "next/head";
import styles from "../styles/Home.module.css";
import global from "../styles/global.module.css";
import home from "../styles/index.module.css";

export default function Home() {
  return (
    <div className={global.container}>
      <Head>
        <title>Football and Rugby @ Banarasi Kitchen & The Spread Eagle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Football</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </div>

        <div className={styles.card}>
          <h3>Rugby</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </div>
      </div>
    </div>
  );
}
