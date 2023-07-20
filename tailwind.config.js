/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                slideRightAndFade: 'slideRightAndFade 0.2s ease-out',
                slideDownAndFade: 'slideDownAndFade 0.2s ease-out',
                slideUpAndFade: 'slideUpAndFade 0.2s ease-out',
                fadeIn: 'fadeIn 0.2s ease-out',
            },
            keyframes: {
                slideRightAndFade: {
                    '0%': {
                        transform: 'translateX(-10px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateX(0px)',
                        opacity: 1,
                    },
                },
                slideDownAndFade: {
                    '0%': {
                        transform: 'translateY(-10px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateY(0px)',
                        opacity: 1,
                    },
                },
                slideUpAndFade: {
                    '0%': {
                        transform: 'translateY(10px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateY(0px)',
                        opacity: 1,
                    },
                },
                fadeIn: {
                    '0%': {
                        opacity: 0,
                    },
                    '100%': {
                        opacity: 1,
                    },
                },
            },
        },
    },
    plugins: [require('prettier-plugin-tailwindcss')],
};
