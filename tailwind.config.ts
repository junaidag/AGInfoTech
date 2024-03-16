import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        10: "10px",
        32: "32px",
      },
      
      backgroundImage: {
        bordergradient:
          "linear-gradient(158.82deg, rgba(255, 255, 255, 0.41) 3.46%, rgba(255, 255, 255, 0.0001) 35.43%, rgba(255, 255, 255, 0.0001) 50.61%, rgba(255, 255, 255, 0.41) 80.18%)",
        main: "linear-gradient(90deg, #1D89FF 0%, #8EF9F1 100%);",
        mainReverse: "linear-gradient(90deg, #8EF9F1 0%, #1D89FF 100%);",
      },
      fontSize: {
        32: "32px",
        40: "40px",
      },
    },
  },
  plugins: [],
};
export default config;
