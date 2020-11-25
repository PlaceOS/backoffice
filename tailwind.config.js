
const colors = require('tailwindcss/colors')

module.exports = (is_build) => ({
    prefix: '',
    important: '#placeos',
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true
    },
    purge: {
      enabled: is_build && false,
      content: ['**/*.html', '**/*.ts']
    },
    theme: {
        screens: {
            sm: '640px'
        },
        colors: {
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            primary: '#C92366',
            secondary: '#0A0D2E',
            ternary: '#0A0D2E',
            quaternary: '#0A0D2E',
            error: '#e53935',
            pending: '#ffb300',
            success: '#43a047'
        }
    }
});
