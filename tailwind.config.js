/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Roboto", "Apple Color Emoji", "Helvetica Neue", sans-serif;',
      },
      colors: {
        DEFAULT: 'var(--tg-theme-text-color)',
        primary: 'var(--tg-theme-text-color)',
        hint: 'var(--tg-theme-hint-color)',
        link: 'var(--tg-theme-link-color)',
        accent: 'var(--tg-theme-accent-text-color)',
        subtitle: 'var(--tg-theme-subtitle-text-color)'
      },
      backgroundColor: {
        primary: 'var(--tg-theme-bg-color)',
        secondary: 'var(--tg-theme-secondary-bg-color)',
        button: 'var(--tg-theme-button-color)',
        buttonBezeled: 'var(--tgui--secondary_fill)'
      },
      borderColor: {
        primary: 'var(--tgui--divider)',
      }
    },
  },
  plugins: [],
};

/*
    --tg-viewport-height: 995px;
    --tg-viewport-width: 415px;
    --tg-viewport-stable-height: 995px;
    --tg-bg-color: #212121;
    --tg-bottom-bar-color: #232e3c;
    --tg-header-color: #212121;
    --tg-theme-accent-text-color: #6ab2f2;
    --tg-theme-bg-color: #212121;
    --tg-theme-button-color: #5288c1;
    --tg-theme-button-text-color: #ffffff;
    --tg-theme-destructive-text-color: #ec3942;
    --tg-theme-header-bg-color: #17212b;
    --tg-theme-hint-color: #708499;
    --tg-theme-link-color: #6ab3f3;
    --tg-theme-secondary-bg-color: #232e3c;
    --tg-theme-section-bg-color: #17212b;
    --tg-theme-section-header-text-color: #6ab3f3;
    --tg-theme-subtitle-text-color: #708499;
    --tg-theme-text-color: #f5f5f5;
 */

