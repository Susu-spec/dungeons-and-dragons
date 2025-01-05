import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        uncial: ["Uncial Antiqua", "serif"],
        unifraktur: ["UnifrakturCook", "serif"],
        lato: ["Lato", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
