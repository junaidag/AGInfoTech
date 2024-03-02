import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "linear-gradient(90deg, #1D89FF 0%, #8EF9F1 100%);",
      },
      fontSize: {
        32: "32px",
      },
    },
  },
  plugins: [],
};
export default config;
