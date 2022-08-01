const { join } = require('path');

const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    join(__dirname, 'src/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require(join(__dirname, '..', '..', '..', 'tailwind-workspace-preset.js'))],
};
