import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "./components/banner";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Discover coffee shops nearby" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View stores nearby" />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} alt="" />
        </div>
      </main>
    </div>
  );
}
