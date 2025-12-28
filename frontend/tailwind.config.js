/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bosque': '#2D5A27',
                'hoja': '#A4C639',
                'tierra': '#5D4037',
                'crema': '#FDFBF7', // Fondo orgánico cálido
            },
        },
    },
    plugins: [],
}