import themes from "daisyui/src/theming/themes.js";

export const customConfig = {
  colors: {
    theme: "winter",
    main: themes[`[data-theme=winter"]`],
  },
  // example as mvpagency.com without https://
  domainName: "mvpagency.com",
  mailgun: {
    subdomain: "mg",
    fromNoReply: `MVPAgency <noreply@mg.mvpagency.com>`,
    fromAdmin: `MVPAgency <admin@mg.mvpagency.com>`,
    supportEmail: "support@mvpagency.com",
    forwardRepliesTo: "nurgasab@gmail.com",
    noreply: "noreply@mg.mvpagency.com"
  },
  documentTitle: "Yummy Meals, Strong Baby - MVPAgency",
  domainWithHttps: "https://mvpagency.com",
  seo: {
    keywords:
      "first trimester recipes, 7 day meal plan for pregnant woman, pregnancy dinner recipes first trimester, dinner ideas for first trimester, meal plans for pregnant moms",
    description:
      "Yummy Meals, Strong Baby! Get personalized daily, weekly, and monthly meal plans for a healthy pregnancy. Eat smart and grow a happy baby with our easy-to-use food guide.",
    themeColor: "#ffffff",
    applicationName: "MVPAgency",
    og: {
      title: "MVPAgency - Yummy Meals, Strong Baby!",
      url: "https://mvpagency.com",
      image: "https://mvpagency.com/company_related/og-image.webp",
      imageAlt:
        "MVPAgency - Yummy Meals, Strong Baby! Get personalized daily, weekly, and monthly meal plans for a healthy pregnancy. Eat smart and grow a happy baby with our easy-to-use food guide.",
      content: "https://x.com/tech_nurgaliyev",
      twitterSite: "@tech_nurgaliyev",
      twitterImage: "https://mvpagency.com/company_related/og-image.webp",
    },
  },
  blog: {
    title: "MVPAgency Blog",
    description:
      "Foods to avoid during pregnancy, first trimester recipes, 7 day meal plan for pregnant woman, pregnancy food aversions, pregnancy dinner recipes first trimester, dinner ideas for first trimester, meal plans for pregnant moms",
    canonical: "https://mvpagency.com/blog",
    author: {
      name: "Sabyr Nurgaliyev",
      description:
        "I am a software engineer and the husband of a pregnant woman. I wanted to create a platform that helps pregnant women because I know how hard it is to find the right information. My wife is pregnant, and I want to make sure she is eating the right food. I am building MVPAgency to help moms eat healthy and grow a happy baby.",
    },
  },
};
