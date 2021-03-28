module.exports = {
  darkMode: 'media',
  purge: ['./src/**/*.tsx', './public/index.html'],
  theme: {
    extend: {
      colors: {
        backgroundGradient: {
          start: '#1E1A1B',
          stop: '#272727'
        },
        main: {
          primary: '#773EEC',
          accent: {
            dark: '#8246FE',
            light: '#773EEC'
          }
        }
      },
      fontFamily: {
        body: ['Poppins']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
