"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import Photopea from "./components/Photopea/Photopea";
// import DraftJs from "./components/DraftJs/DraftJs";
// import Link from "next/link";
import content from "./content";
import EasyCrop from "./components/EasyCrop/EasyCrop";
import { useState } from "react";
import dynamic from "next/dynamic";
import SlateComponent from "./components/Slate/Slate";
import Lexical from "./components/Lexical/Lexical";

// import Editor from "@react-page/editor";

const DraftJs = dynamic(() => import("./components/DraftJs/DraftJs"), {
  ssr: false,
});

export default function Home() {
  const [imageSrc, setImageSrc] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const handleImageCropped = (croppedImageUrl) => {
    setCroppedImage(croppedImageUrl);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener("load", () => {
        setImageSrc(reader.result.toString());
      });
    }
  };
  const ids = Object.keys(content);

  const initialContent = {
    blocks: [
      {
        key: "6mgfh",
        text: "This is text that can be edited.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  };
  const initialContentSlate = {
    id: 1,
    name: "Template 1",
    content: [
      {
        type: "paragraph",
        children: [{ text: "This is the first template." }],
      },
    ],
  };
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
          <div>Hi I&apos;m Steve, this is updated.</div>
        </div>
        <Lexical />
        {/* <SlateComponent initialContent={initialContentSlate} /> */}

        {/* <div className={styles.container}>
          <p>Below is react-easy-crop</p>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {imageSrc && (
            <EasyCrop imageSrc={imageSrc} onImageCropped={handleImageCropped} />
          )}

          {croppedImage && (
            <img src={croppedImage} alt="Cropped" className={styles.image} />
          )}
        </div> */}
        {/* {ids.map((id) => (
          <Link href={`/editDoc/${id}`} key={id}>
            <p>Edit Content {id}</p>
          </Link>
        ))} */}

        {/* <DraftJs initialContent={initialContent} /> */}

        {/* <div className={styles.container}>
          <p>Below is photopea</p>
          <Photopea />
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
        </div> */}
      </main>
    </>
  );
}
