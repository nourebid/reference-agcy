import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}"], // Fixed glob pattern
  prefix: "",
  theme: {
    screens: {
      xs: "440px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1620px",
    },
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        xl: "1080px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        primary: {
          "50": "rgba(var(--primary-50) ,<alpha-value>)",
          "100": "rgba(var(--primary-100) ,<alpha-value>)",
          "200": "rgba(var(--primary-200) ,<alpha-value>)",
          "300": "rgba(var(--primary-300) ,<alpha-value>)",
          "400": "rgba(var(--primary-400) ,<alpha-value>)",
          "500": "rgba(var(--primary-500) ,<alpha-value>)",
          "600": "rgba(var(--primary-600) ,<alpha-value>)",
          "700": "rgba(var(--primary-700) ,<alpha-value>)",
          "800": "rgba(var(--primary-800) ,<alpha-value>)",
        },
        lime: {
          "500": "rgba(#ADFB49 ,<alpha-value>)",
        },
        secondary: {
          "500": "rgba(var(--secondary-500) ,<alpha-value>)",
        },
        gray: {
          "0": "rgba(var(--gray-0) ,<alpha-value>)",
          "50": "rgba(var(--gray-50) ,<alpha-value>)",
          "100": "rgba(var(--gray-100) ,<alpha-value>)",
          "150": "rgba(var(--gray-150) ,<alpha-value>)",
          "200": "rgba(var(--gray-200) ,<alpha-value>)",
          "300": "rgba(var(--gray-300) ,<alpha-value>)",
          "400": "rgba(var(--gray-400) ,<alpha-value>)",
          "500": "rgba(var(--gray-500) ,<alpha-value>)",
          "600": "rgba(var(--gray-600) ,<alpha-value>)",
          "700": "rgba(var(--gray-700) ,<alpha-value>)",
          "800": "rgba(var(--gray-800) ,<alpha-value>)",
          "900": "rgba(var(--gray-900) ,<alpha-value>)",
        },
      },
      maxWidth: {
        dvw: "100dvw",
      },
      height: {
        "10.5": "2.625rem",
      },
      lineHeight: {
        relaxed: "1.8",
      },
      fontSize: {
        xs: ["0.75rem", "1.6rem"],
        sm: ["0.875rem", "2rem"],
        base: ["1rem", "1.8rem"],
        lg: ["1.125rem", "1.8rem"],
        xl: ["1.25rem", "2rem"],
        "2xl": ["1.5rem", "2rem"],
        "3xl": ["1.875rem", "2.6rem"],
        "4xl": ["2.25rem", "3.2rem"],
        "5xl": ["3rem", "5rem"],
        "6xl": ["3.75rem", "1.2"],
        "7xl": ["4.5rem", "1.2"],
        "8xl": ["6rem", "1"],
        "9xl": ["8rem", "1"],
      },
      backgroundImage: {
        "screen-header-gradient": `url('/images/common/screen-header-gradient.svg')`,
        "screen-header-gradient-dark": `url('/images/common/screen-header-gradient-dark.svg')`,
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        fadeUp: {
          from: {
            opacity: "0",
            transform: "translateY(1rem)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeDown: {
          from: {
            opacity: "0",
            transform: "translateY(-3rem)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeRight: {
          from: {
            opacity: "0",
            transform: "translateX(-3rem)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeLeft: {
          from: {
            opacity: "0",
            transform: "translateX(3rem)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "caret-blink": {
          "0%,70%,100%": {
            opacity: "1",
          },
          "20%,50%": {
            opacity: "0",
          },
        },
        "bar-loading": {
          "0%": {
            transformOrigin: "left",
            transform: "scaleX(0)",
          },
          "50%": {
            transformOrigin: "left",
            transform: "scaleX(1)",
          },
          "51%": {
            transformOrigin: "right",
          },
          "100%": {
            transform: "scaleX(0)",
            transformOrigin: "right",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.5s ease",
        "fade-up": "fadeUp 0.5s ease",
        "fade-down": "fadeDown 0.5s ease",
        "fade-right": "fadeRight 0.5s ease",
        "fade-left": "fadeLeft 0.5s ease",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "bar-loading": "bar-loading .7s linear infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
      });
    }),

    tailwindcssAnimate,
    function ({
      addVariant,
    }: {
      addVariant: (name: string, selector: string) => void;
    }) {
      addVariant("lang-ar", '[lang="ar"] &');
      addVariant("lang-en", '[lang="en"] &');
    },
  ],
} satisfies Config;

export default config;
