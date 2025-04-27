/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // Azul (puedes cambiarlo)
          foreground: '#fff',
        },
        secondary: {
          DEFAULT: '#f59e42', // Naranja (puedes cambiarlo)
          foreground: '#fff',
        },
        alert: {
          DEFAULT: '#dc2626', // Rojo
          foreground: '#fff',
        },
        accent: {
          DEFAULT: '#e0e7ff', // Azul claro
          foreground: '#1e293b',
        },
        background: '#fff',
        foreground: '#1e293b',
        ring: '#2563eb',
        base: '#e5e7eb',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
        base: '0 1px 3px 0 rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
