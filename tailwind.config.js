module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class",
    theme: {
        extend: {},
        fontFamily: {
            sans: ["Helvetica", "Roboto", "ui-sans-serif", "system-ui"],
            serif: ["Georgia", "ui-serif", "serif"],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("postcss-preset-env")({})],
};
