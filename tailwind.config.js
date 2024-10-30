import daisyui from "daisyui";

module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: false,
  plugins: [daisyui, require("tailwindcss-animate")],
  daisyui: {
    themes: true
  },
};