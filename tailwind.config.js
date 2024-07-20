/** @type {import('tailwindcss').Config} */


module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                nypink: {
                    50: '#fcf4f4',
                    100: '#fae6e6',
                    200: '#f6d2d2',
                    300: '#efb2b3',
                    400: '#e48586',
                    500: '#d65d5e',
                    600: '#c14142',
                    700: '#a23334',
                    800: '#862e2f',
                    900: '#702c2d',
                    950: '#3c1313',
                },
                wisteria: {
                    50: '#faf8fc',
                    100: '#f3eff8',
                    200: '#eae2f2',
                    300: '#d9cbe7',
                    400: '#c0a9d7',
                    500: '#a687c5',
                    600: '#916db3',
                    700: '#795799',
                    800: '#664a7f',
                    900: '#543d66',
                    950: '#382348',
                },
                melon: {
                    50: '#fef4f2',
                    100: '#fee7e2',
                    200: '#fed3ca',
                    300: '#fcbaad',
                    400: '#f88771',
                    500: '#ee6145',
                    600: '#db4527',
                    700: '#b8371d',
                    800: '#99301b',
                    900: '#7f2d1d',
                    950: '#45140a',
                },
                fantasy: {
                    50: '#fff8f5',
                    100: '#ffe9e0',
                    200: '#ffd7c6',
                    300: '#ffbb9e',
                    400: '#ff9466',
                    500: '#fd7236',
                    600: '#eb5717',
                    700: '#c6460f',
                    800: '#a33d11',
                    900: '#873715',
                    950: '#4a1a05',
                },
                emperor: {
                    50: '#f8f7f7',
                    100: '#f0eeee',
                    200: '#dddada',
                    300: '#bfbaba',
                    400: '#9c9494',
                    500: '#807777',
                    600: '#686161',
                    700: '#544e4e',
                    800: '#484444',
                    900: '#3f3c3b',
                    950: '#2a2727',
                },
            
            },
        },
        fontFamily: {
            laviossa: ['Laviossa', 'sans-serif'],
            eloquiabold: ['Eloquia-ExtraBold', 'sans-serif'],
            eloquialight: ['Eloquia-ExtraLight', 'sans-serif'],
            brotherside: ['BrothersideSignature', 'sans-serif'],
            amsterdam: ['Amsterdam', 'sans-serif'],
        },
    },
    plugins: [
    ],
}
