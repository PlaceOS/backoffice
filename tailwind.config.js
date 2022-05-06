const { guessProductionMode } = require('@ngneat/tailwind');

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
    important: '#placeos',
    mode: 'jit',
    purge: {
        content: [
            './apps/**/*.{html,ts,css,scss,sass,less,styl}',
            './libs/**/*.{html,ts,css,scss,sass,less,styl}',
        ],
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        screens: {
            sm: '640px',
        },
        extend: {
            colors: {
                pink: '#C52B67',
                primary: '#292F5B',
                secondary: '#0A0D2E',
                ternary: '#0A0D2E',
                quaternary: '#0A0D2E',
                error: '#e53935',
                pending: '#ffb300',
                success: '#43a047',
                info: '#3B82F6',
                grey: '#313131',
                greyer: '#212121',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
