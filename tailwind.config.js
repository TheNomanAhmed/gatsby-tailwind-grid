module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
      },
      colors: {
        primary: "#639",
        secondary: "#ecd9ff",
        // negative: "var(--color-negative)",
        // positive: "var(--color-positive)",
        // "primary-background": "var(--background-primary)",
        // "sec-background": "var(--background-sec)",
        // "primary-text": "var(--color-text-primary)",
      },
    },

    fill: theme => ({
      navLight: "#ecd9ff",
      navDark: "#639",
      none: "none",
    }),
  },
  variants: {
    fill: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
}
