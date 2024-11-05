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
        'input':'#f3f3f3',
        'ftcolor':'#2C2C2C',
        'ftSep':'#D8D8D8',
        'ftText':'#C8C8C8',
      },
    },
  },
  plugins: [],
};
export default config;
