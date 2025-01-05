/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: '#007BFF',
        Secondary: '#FFA500',
        Background: '#F9FAFB',
        Text: '#333333',
        Accent: '#20B2AA',

        DarkPrimary: '#1D4ED8',
        DarkSecondary: '#F59E0B',
        DarkBackground: '#1A1A1A',
        DarkText: '#E5E7EB',
        DarkAccent: '#10B981'
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hand': "url('/hand.jpg')",
        'money': "url('/money.jpg')",
        'unity': "url('/unity.jpg')",
      },
    },
  },
  plugins: [daisyui],
  darkMode: 'class',
}
