import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Steve&apos;s Next Playground</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/icons/icon-192x192.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>Hi I&apos;m Steve</div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </main>
    </>
  );
}
