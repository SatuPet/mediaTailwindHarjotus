/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      maxWidth: {
        '1/2': '80%',
        '1/3': '90%',
      },
      extend: {
        gridAutoColumns: {
          '3fr': 'auto auto auto',
        },
        backgroundImage: {
          'lights': "url('lights.jpeg')",
          'light3': "url('light6.jpeg)",
        },
        gridTemplateColumns: {
          // Simple 16 column grid
          '3': 'repeat(3, minmax(0, 1fr))',
          '2': 'repeat(2, minmax(0, 1fr))',
  
          // Complex site-specific column configuration
          'footer': '200px minmax(900px, 1fr) 100px',
        },  
        screens: {
          'sm': '0px',
          // => @media (min-width: 640px) { ... }
    
          'md': '550px',
          // => @media (min-width: 768px) { ... }
    
          'lg': '700px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '800px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '900px',
          // => @media (min-width: 1536px) { ... }
        },
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'white' : '#ffffff',
          'jtn' : '#CB6D51',
          'grey': '#292626',
          'yellow': '#FDE6AC',
          'black': '#000000',
          'gblue': '#72748f',
          'test' : '#2c2d31',
          'wgray': '#9FA2A7',
          'bermuda': '#78dcca',
          },
      },
    },
    plugins: [],
  }