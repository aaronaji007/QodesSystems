import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        "primary-hover": "var(--primary-hover)",
        secondary: "var(--secondary)",
        "secondary-hover": "var(--secondary-hover)",
        "secondary-dark": "var(--secondary-dark)",
        title: "var(--title)",
        "green-tag": "var(--green-tag)",
        "red-tag": "var(--red-tag)",
        "purple-tag": "var(--purple-tag)",
        "orange-tag": "var(--orange-tag)",
        "blue-tag": "var(--blue-tag)",
        "background-light": "var(--background-light)",
        "blue-stripe": "var(--blue-stripe)",
        "twitter": "var(--twitter)",
        "facebook": "var(--facebook)",
        "google": "var(--google)",
        "linkedin": "var(--linkedin)",
        "border" :"var(--border)",
        "light-gray" :"var(--light-gray)",
        "dark-gray" :"var(--dark-gray)"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        base: "var(--base-font)"
      }
    },
  },
  plugins: [animate],
} satisfies Config;
