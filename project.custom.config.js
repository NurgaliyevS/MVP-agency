import themes from "daisyui/src/theming/themes.js";

export const customConfig = {
  colors: {
    theme: "winter",
    main: themes[`[data-theme=winter"]`],
  },
  domainName: "mvpagency.org",
  mailgun: {
    subdomain: "mg",
    fromNoReply: `MVP Agency <noreply@mg.mvpagency.org>`,
    fromAdmin: `MVP Agency <admin@mg.mvpagency.org>`,
    supportEmail: "support@mvpagency.org",
    forwardRepliesTo: "nurgasab@gmail.com",
    noreply: "noreply@mg.mvpagency.org"
  },
  documentTitle: "Build Your MVP Fast - MVP Agency",
  domainWithHttps: "https://mvpagency.org",
  seo: {
    keywords:
      "build mvp, minimum viable product, building an mvp for startups, mvp product, mvp for startups, build a minimum viable product, mvp builds, minimum viable product services",
    description:
      "MVP Agency helps startups build Minimum Viable Products fast. Bring your idea to life.",
    themeColor: "#ffffff",
    applicationName: "MVP Agency",
    og: {
      title: "MVP Agency - Build Your Minimum Viable Product Fast",
      url: "https://mvpagency.org",
      image: "https://mvpagency.org/company_related/og-image.webp",
      imageAlt:
        "MVP Agency helps startups build Minimum Viable Products fast. Bring your idea to life.",
      content: "https://x.com/tech_nurgaliyev",
      twitterSite: "@tech_nurgaliyev",
      twitterImage: "https://mvpagency.org/company_related/og-image.webp",
    },
  },
  blog: {
    title: "MVP Agency Blog",
    description:
      "Learn about building MVPs, startup strategies, product development, and more. Get insights on minimum viable products, MVP for startups, and efficient product builds.",
    canonical: "https://mvpagency.org/blog",
    author: {
      name: "Sabyr Nurgaliyev",
      description:
        "I am a software engineer and entrepreneur with a passion for helping startups succeed. With years of experience in building MVPs and scaling products, I founded MVP Agency to assist startups in turning their ideas into reality quickly and efficiently.",
    },
  },
};