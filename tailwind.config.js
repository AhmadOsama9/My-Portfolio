/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Colors: Minimal and professional
      colors: {
        primary: {
          50: '#E3FDFD',  // Light blue (backgrounds)
          100: '#CBF1F5', // Soft blue (accent)
          200: '#A6E3E9', // Mid blue (buttons, highlights)
          300: '#71C9CE', // Deep blue (headings)
          400: '#38A3A5', // Dark blue (text, strong accents)
          500: '#2C7E7F', // Darker blue (emphasis)
        },
        neutral: {
          50: '#F7FAFC',  // Almost white (backgrounds)
          100: '#EDF2F7', // Light gray (section backgrounds)
          200: '#E2E8F0', // Soft gray (dividers)
          300: '#CBD5E0', // Medium gray (icons)
          400: '#718096', // Slate gray (secondary text)
          500: '#4A5568', // Dark gray (body text)
          600: '#2D3748', // Charcoal (strong text)
        },
        accent: {
          green: '#48BB78', // Success, positive actions
          blue: '#3182CE',  // Info, links
          purple: '#6B46C1', // Creative, highlights
          red: '#E53E3E',   // Error, warnings
        },
      },

      // Typography: Clean and modern fonts
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans], // Modern, clean font
        mono: ["JetBrains Mono", ...fontFamily.mono], // Technical, monospace
      },

      // Spacing: Consistent and scalable
      spacing: {
        7.5: '1.875rem', // Custom spacing
        15: '3.75rem',   // Custom spacing
      },

      // Border radius: Smooth and modern
      borderRadius: {
        DEFAULT: '0.375rem',  // 6px
        lg: '0.5rem',         // 8px
        xl: '0.75rem',        // 12px
      },

      // Transitions: Smooth and deliberate
      transitionDuration: {
        DEFAULT: '300ms',
      },

      // Shadows: Subtle and modern
      boxShadow: {
        DEFAULT: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        glow: '0 0 10px rgba(56, 163, 165, 0.4)', // For interactive elements
      },
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};