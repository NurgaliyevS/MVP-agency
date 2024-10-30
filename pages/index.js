import { LandingPage } from "@/components/landing-page";
import { customConfig } from "@/project.custom.config";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>{customConfig.documentTitle}</title>
        <link rel="canonical" href={customConfig.domainWithHttps} />
      </Head>
      <div className={`${poppins.className} mx-auto`}>
        <LandingPage />
      </div>
    </>
  );
}
