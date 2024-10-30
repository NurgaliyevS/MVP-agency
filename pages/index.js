import { LandingPage } from "@/components/landing-page";
import { customConfig } from "@/project.custom.config";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>{customConfig.documentTitle}</title>
        <link rel="canonical" href={customConfig.domainWithHttps} />
      </Head>
      <div className="mx-auto">
        <LandingPage />
      </div>
    </>
  );
}
