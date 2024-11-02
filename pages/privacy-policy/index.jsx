import Link from "next/link";
import Head from "next/head";
import { customConfig } from "@/project.custom.config";

export const metadata = {
  title: `Privacy Policy | ${customConfig.domainName}`,
  canonicalUrlRelative: "/privacy-policy",
}

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <Head>
        <title>{metadata.title}</title>
        <meta name="robots" content="index, follow" />
      </Head>
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
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {customConfig.seo.applicationName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: November 2, 2024

Thank you for choosing ${customConfig.seo.applicationName} ("we," "us," or "our") for your MVP development needs. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website located at ${customConfig.domainWithHttps} (the "Website") or engage our services.

By accessing our Website or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the practices described in this policy, please do not use our Website or services.

1. Information We Collect

1.1 Personal Data

We collect the following personal information from you:

- **Name and Contact Information:** We collect your name, email address, and phone number to communicate with you about your MVP project and provide our services effectively.
- **Company Information:** If applicable, we collect information about your startup or company to better understand your MVP needs.
- **Project Details:** We collect information related to your MVP project, including your ideas, requirements, and any other details you provide to us.
- **Payment Information:** We collect payment details to process your payments securely. However, we do not store your payment information on our servers. Payments are processed by trusted third-party payment processors.

2. Purpose of Data Collection

We collect and use your personal data for the following purposes:
- To provide our MVP development services
- To communicate with you about your project
- To improve our services and develop new features
- To send you important updates about our company and services
- To comply with legal obligations

3. Data Protection

We implement strict security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes using encryption, secure servers, and regular security audits.

4. Data Sharing

We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.

5. Your Rights

You have the right to access, correct, or delete your personal information. If you wish to exercise these rights or have any questions about your data, please contact us using the information provided below.

6. Changes to This Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes via email or through a prominent notice on our Website.

7. Contact Information

If you have any questions, concerns, or requests related to this Privacy Policy, you can contact us at:

**Email:** ${customConfig.mailgun.forwardRepliesTo}

By using ${customConfig.seo.applicationName}'s services, you consent to the terms of this Privacy Policy.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;