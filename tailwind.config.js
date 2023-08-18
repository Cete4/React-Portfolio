/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            'Roboto-Condensed': []
        },
        colors:
            {
                "Seasalt": "#F8F7F7",
                "Verdigris": "#4CB5B1",
                "Umber": "#57453E",
                "Black": "#030405",
                "Old rose": "#D77E83",
                "Sunset": "#FCCC7E",
                "Cerulean": "#3A7890",
                "White smoke": "#F5F5F5"
            }


    },
    plugins: [],
}
