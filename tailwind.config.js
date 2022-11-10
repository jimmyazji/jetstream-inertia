const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                mango: {
                    50: "#FEF7F0",
                    100: "#FCEEDE",
                    200: "#F8DBB8",
                    300: "#F4C793",
                    400: "#F1B46E",
                    500: "#EDA149",
                    600: "#E78717",
                    700: "#B46912",
                    800: "#814B0D",
                    900: "#4E2D08",
                },
            },
            transitionProperty: {
                padding: "padding, spacing, margin",
            },
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
