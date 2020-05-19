module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
      },
      colors: {
        // "primary-light": "#6136e2",
        "back-light": "#0A041A",
        "back-light-hover": "#181326",

        "heading-dark": "#9984D5",
        "back-dark": "#0A041A",
        "back-dark-hover": "#181326",
        // secondary: "#ecd9ff",
        // negative: "var(--color-negative)",
        // positive: "var(--color-positive)",
        // "primary-background": "var(--background-primary)",
        // "sec-background": "var(--background-sec)",
        // "primary-text": "var(--color-text-primary)",
        muted: "var(--color-muted)",
        "muted-hover": "var(--color-muted-hover)",
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        secondary: "var(--color-secondary)",
        "secondary-hover": "var(--color-secondary-hover)",
        info: "var(--color-info)",
        "info-hover": "var(--color-info-hover)",
        success: "var(--color-success)",
        "success-hover": "var(--color-success-hover)",
        "success-background": "var(--color-success-background)",
        warning: "var(--color-warning)",
        "warning-hover": "var(--color-warning-hover)",
        "warning-background": "var(--color-warning-background)",
        danger: "var(--color-danger)",
        "danger-hover": "var(--color-danger-hover)",
        "danger-background": "var(--color-danger-background)",
        background: "var(--color-background)",
        "background-muted": "var(--color-background-muted)",
        heading: "var(--color-heading)",
        "heading-muted": "var(--color-heading-muted)",
        body: "var(--color-body)",
        "body-muted": "var(--color-body-muted)",
      },
    },

    fill: theme => ({
      navLight: "var(--color-heading)",
      navDark: "var(--color-background)",
      none: "none",
    }),
    stroke: theme => ({
      navLight: "var(--color-body)",
      navDark: "var(--color-body)",
      none: "none",
    }),
  },
  variants: {
    fill: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
}
