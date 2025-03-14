/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 9s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: '#4a5568',
            h1: {
              color: '#2d3748',
            },
            h2: {
              color: '#2d3748',
            },
            h3: {
              color: '#2d3748',
            },
            h4: {
              color: '#2d3748',
            },
            strong: {
              color: '#2d3748',
            },
            a: {
              color: '#4f46e5',
              '&:hover': {
                color: '#3730a3',
              },
            },
            blockquote: {
              borderLeftColor: '#e2e8f0',
              color: '#4a5568',
            },
            code: {
              color: '#4a5568',
            },
            pre: {
              backgroundColor: '#1e293b',
              color: '#e2e8f0',
            },
          },
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: ["light"],
  },
};
