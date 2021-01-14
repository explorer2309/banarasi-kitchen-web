import Head from "next/head";
import styles from "../styles/Home.module.css";
import global from "../styles/global.module.css";
import home from "../styles/index.module.css";

export default function Home() {
  return (
    <div className={global.container}>
      <Head>
        <title>Banarasi Kitchen & The Spread Eagle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={home.hero}>
        <div className={home.heroPoints}>
          <div className={home.one}>
            What makes Banarasi Kitchen Fine Indian Food so special?
          </div>
          <div className={home.two}>
            Style, Quality, Creativity, Refinement,
          </div>
          <div className={home.three}>but above all Taste!</div>
        </div>

        <div className={home.actionLinks}>
          <a href="menu">Takeaway / Delivery - Order Online</a>
          <a href="#">Book a table online</a>
        </div>
      </section>

      <section className={home.about}>
        <div className={home.aboutTitle}>
          Banarasi Kitchen - The Spread Eagle
        </div>
        <div className={home.aboutTag}>Food for Soul</div>
        <p>
          Where authenticity and creativity are our essence. What makes us
          different – we use fresh authentic style of Indian food inspired by
          different regions of India. Predominantly food from North. The city of
          Banaras is known for its street food, the influence of Kolkatta Style
          food which is reflected in the Momo’s and the Chilli Chiken influenced
          from Nepal to the mouth watering delicacies of the South of India the
          Murg Kori Gassi from Manglore.
        </p>
        <p>
          The Hyderabadi Influence in the Biryani to the Awadhi influence in its
          Punjab-Delhi style grills and all time favourite makhani. The
          delectable chaats and samosa’s steal the show.
        </p>
        <p>All this is done with love, care and passion for food.</p>
        <p>
          We offer the food to be enjoyed at the historical Pub site we own at
          The Spread Eagle in its unique aquatic dining area or we offer
          takeaways and deliver to your door step for you to enjoy the
          delicacies in the comfort of your home.
        </p>
      </section>

      {/* <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className={styles.card}>
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}>
          <h3>Deploy &rarr;</h3>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div> */}
    </div>
  );
}
