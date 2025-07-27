import type { Config } from "tailwindcss";

export default {
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
      },
      //       fontFamily: {
      //   sans: ['Inter', 'sans-serif'], // ví dụ: dùng Inter
      //   serif: ['Georgia', 'serif'],
      //   mono: ['Menlo', 'monospace'],
      // },
      // fontSize: {
      //   base: '18px',
      //   lg: '18px',
      //   xl: '20px',
      // },
    },
  },
  plugins: [],
} satisfies Config;
