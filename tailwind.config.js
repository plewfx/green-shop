/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './index.html',
  ],
  theme: {
    screens: {
      'sm': {'max': '639px'},
    },
    fontFamily: {
      'cera': ['Cera Pro', 'sans-serif'],
      'hanging': ['Hanging Letters', 'sans-serif']
    },
    lineHeight: {
      50: '50%',
      70: '70%',
      90: '90%',
      125: '125%',
      150: '150%',
      160: '160%',
      170: '170%',
      210: '210%',
    },
    borderRadius: {
      4: '0.27vw',
      6: '0.41vw',
      30: '2.08vw',
      'circle': '50%'
    },
    borderWidth: {
      0: '0vw',
      1: '0.07vw',
      2: '0.14vw',
    },
    width: {
      12: '0.83vw',
      16: '1.11vw',
      20: '1.38vw',
      24: '1.66vw',
      30: '2.08vw',
      150: '10.41vw'
    },
    height: {
      12: '0.83vw',
      16: '1.11vw',
      20: '1.38vw',
      24: '1.66vw',
      30: '2.08vw',
      150: '10.41vw'
    },
    fontSize: {
      10: '0.7vw',
      11: '0.76vw',
      12: '0.83vw',
      13: '0.90vw',
      14: '0.97vw',
      15: '1.04vw',
      16: '1.11vw',
      17: '1.18vw',
      18: '1.25vw',
      19: '1.32vw',
      20: '1.38vw',
      23: '1.59vw',
      30: '2.08vw',
      65: '4.51vw',
    },
    padding: {
      2: '0.14vw',
      3: '0.20vw',
      7: '0.48vw',
      8: '0.55vw',
      9: '0.625vw',
      10: '0.7vw',
      11: '0.76vw',
      12: '0.83vw',
      14: '1vw',
      15: '1.04vw',
      17: '1.18vw',
      18: '1.25vw',
      19: '1.32vw',
      24: '1.66vw',
      25: '1.73vw',
      26: '1.80vw',
      27: '1.875vw',
      29: '2.01vw',
      30: '2.08vw',
      33: '2.29vw',
      34: '2.36vw',
      38: '2.63vw',
      43: '2.98vw',
      46: '3.19vw',
      50: '3.47vw',
      68: '4.72vw',
      85: '5.902vw',
      86: '5.97vw',
      100: '7vw',
      118: '8.2vw',
    },
    margin: {
      'auto': 'auto',
      2: '0.14vw',
      3: '0.20vw',
      7: '0.48vw',
      8: '0.55vw',
      9: '0.625vw',
      10: '0.7vw',
      11: '0.76vw',
      12: '0.83vw',
      14: '1vw',
      17: '1.18vw',
      18: '1.25vw',
      19: '1.32vw',
      24: '1.66vw',
      25: '1.73vw',
      26: '1.80vw',
      27: '1.875vw',
      29: '2.01vw',
      30: '2.08vw',
      33: '2.29vw',
      34: '2.36vw',
      38: '2.63vw',
      43: '2.98vw',
      46: '3.19vw',
      50: '3.47vw',
      68: '4.72vw',
      85: '5.902vw',
      86: '5.97vw',
      100: '7vw',
      118: '8.2vw',
    },
    gap: {
      4: '0.27vw',
      5: '0.347vw',
      7: '0.48vw',
      8: '0.55vw',
      9: '0.625vw',
      10: '0.7vw',
      12: '0.8vw',
      13: '0.902vw',
      15: '1.04vw',
      17: '1.18vw',
      18: '1.25vw',
      20: '1.38vw',
      25: '1.73vw',
      26: '1.80vw',
      30: '2.08vw',
      33: '2.29vw',
      34: '2.36vw',
      36: '2.5vw',
      40: '2.77vw',
      50: '3.47vw',
      54: '3.75vw',
      55: '3.819vw',
      60: '4.16vw',
      70: '4.86vw',
      87: '6.04vw',
      90: '6.25vw',
      93: '6.47vw',
    },
    colors: {
      white: '#FFF',
      grey: {
        '3D': '#3D3D3D',
        'FB': '#FBFBFB',
        '72': '#727272',
        'AC': '#ACACAC',
        'A5': '#A5A5A5',
      },
      primary: '#46A358',
      primaryHover: '#3C884B',
      transparent: 'transparent'
    },
  }
}