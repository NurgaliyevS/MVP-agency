import { LandingPage } from "@/components/landing-page";
import { customConfig } from "@/project.custom.config";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>{customConfig.documentTitle}</title>
        <link rel="canonical" href={customConfig.domainWithHttps} />
        <meta
          name="description"
          // Start monitoring in 30 seconds. Get notified by email, and SMS. Monitor your website, and server.
          content={customConfig.seo.description}
        />
      </Head>
      <div className="mx-auto">
        <LandingPage />
      </div>
    </>
  );
}
