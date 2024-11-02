import themes from "daisyui/src/theming/themes.js";

export const customConfig = {
  colors: {
    theme: "winter",
    main: themes[`[data-theme=winter"]`],
  },
  domainName: "mvpagency.com",
  mailgun: {
    subdomain: "mg",
    fromNoReply: `MVP Agency <noreply@mg.mvpagency.com>`,
    fromAdmin: `MVP Agency <admin@mg.mvpagency.com>`,
    supportEmail: "support@mvpagency.com",
    forwardRepliesTo: "nurgasab@gmail.com",
    noreply: "noreply@mg.mvpagency.com"
  },
  documentTitle: "Build Your MVP Fast - MVP Agency",
  domainWithHttps: "https://mvpagency.com",
  seo: {
    keywords:
      "build mvp, minimum viable product, building an mvp for startups, mvp product, mvp for startups, build a minimum viable product, mvp builds, minimum viable product services",
    description:
      "MVP Agency helps startups build Minimum Viable Products fast. Bring your idea to life.",
    themeColor: "#ffffff",
    applicationName: "MVP Agency",
    og: {
      title: "MVP Agency - Build Your Minimum Viable Product Fast",
      url: "https://mvpagency.com",
      image: "https://mvpagency.com/company_related/og-image.webp",
      imageAlt:
        "MVP Agency helps startups build Minimum Viable Products fast. Bring your idea to life.",
      content: "https://x.com/tech_nurgaliyev",
      twitterSite: "@tech_nurgaliyev",
      twitterImage: "https://mvpagency.com/company_related/og-image.webp",
    },
  },
  blog: {
    title: "MVP Agency Blog",
    description:
      "Learn about building MVPs, startup strategies, product development, and more. Get insights on minimum viable products, MVP for startups, and efficient product builds.",
    canonical: "https://mvpagency.com/blog",
    author: {
      name: "Sabyr Nurgaliyev",
      description:
        "I am a software engineer and entrepreneur with a passion for helping startups succeed. With years of experience in building MVPs and scaling products, I founded MVP Agency to assist startups in turning their ideas into reality quickly and efficiently.",
    },
  },
};