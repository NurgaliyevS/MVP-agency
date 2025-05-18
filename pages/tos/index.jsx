import { customConfig } from "@/project.custom.config";
import Link from "next/link";
import Head from "next/head";

const TOS = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <main className="max-w-xl mx-auto">
        <div className="p-5">
          <Link href="/" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </Link>
          <h1 className="text-3xl font-extrabold pb-6">
            Terms and Conditions for {customConfig.seo.applicationName}
          </h1>

          <pre
            className="leading-relaxed whitespace-pre-wrap"
            style={{ fontFamily: "sans-serif" }}
          >
            {`Last Updated: November 2, 2024

Welcome to ${customConfig.seo.applicationName}!

These Terms of Service ("Terms") govern your use of the ${customConfig.seo.applicationName} website at ${customConfig.domainWithHttps} ("Website") and the services provided by ${customConfig.seo.applicationName}. By using our Website and services, you agree to these Terms.

1. Description of ${customConfig.seo.applicationName}

${customConfig.seo.applicationName} is a specialized agency that helps startups build Minimum Viable Products (MVPs) quickly and efficiently. We offer MVP development services, consultation, and resources to assist entrepreneurs in launching their startups more effectively.

2. Services and Deliverables

When you engage our services, we work collaboratively to design, develop, and deliver your MVP. The specific deliverables will be outlined in your project agreement. While you retain ownership of your product idea and the final MVP, the general methodologies, tools, and non-proprietary code used in development remain the property of ${customConfig.seo.applicationName}.

3. Client Responsibilities

As a client, you are responsible for providing clear project requirements, timely feedback, and any necessary content or assets for your MVP. Your active participation is crucial for the successful and timely completion of your project.

4. Payment and Refunds

Payment terms will be specified in your project agreement. We offer a satisfaction guarantee and will work with you to address any concerns about the delivered MVP. Refund policies are project-specific and will be outlined in your agreement.

5. Confidentiality

We understand the sensitive nature of startup ideas. We maintain strict confidentiality regarding your project details and any proprietary information shared with us during the MVP development process.

6. Intellectual Property

You retain all rights to your startup idea and the final MVP product. ${customConfig.seo.applicationName} retains rights to any proprietary tools, methods, or non-project-specific code used in the development process.

7. Limitation of Liability

While we strive for excellence in our MVP development services, ${customConfig.seo.applicationName} is not responsible for the commercial success or failure of your startup or product.

8. Updates to the Terms

We may update these Terms from time to time. Clients will be notified of any significant changes via email.

For any questions or concerns regarding these Terms of Service, please contact us at ${customConfig.mailgun.forwardRepliesTo}.

Thank you for choosing ${customConfig.seo.applicationName} for your MVP development needs!`}
          </pre>
        </div>
      </main>
    </>
  );
};

export default TOS;
