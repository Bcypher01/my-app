import HomePage from "@/components/HomePage";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <HomePage />
    </div>
  );
}
