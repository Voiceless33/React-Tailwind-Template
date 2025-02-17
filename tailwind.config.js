/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {  
        fontFamily: {
            sans: ["Helvetica", "Arial", "sans-serif"],
          },
    
          animation: {
            typewriter: "typewriter 4s steps(40) 1s 1 normal both",
            blink: "blink 0.75s step-end infinite",
          },
    
          keyframes: {
            typewriter: {
              "0%": { width: "0" },
              "100%": { width: "100%" },
            },
            blink: {
              "0%": { borderColor: "transparent" },
              "50%": { borderColor: "transparent" },
              "100%": { borderColor: "black" },
            },
          },
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
      },
    },
    plugins: [],
  };
  