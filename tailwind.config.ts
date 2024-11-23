import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myColor: "#f6f6f6",
      },
      screens: {
        xs: "15px", // `xs` ko 475px par set kiya gaya hai.
      },
    },
  },
  plugins: [],
};
export default config;
