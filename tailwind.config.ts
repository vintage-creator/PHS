import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FFA500",
        brown: "#434037",
        skyblue: "#F9F9F9",
        blue: "#1A73E8",
        lightgray: "#A1A1A1", 
        blue100: "#F5F5F7",
        blacky: "#333333",
        inputBorder: "#E5E5E5",
        redColor: "#E94444",
      },
    },
  },
  plugins: [],
};
export default config;
