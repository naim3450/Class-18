tailwind.config = {
  theme: {
    extend: {
      // color
      colors: {
          menuColor: '#BBBBCB',
          hoverColor: '#FFF',
          white: 'rgba(255, 255, 255, 0.80)',
          menubg: '#1C1E53',
          bennarBg: '#383A68',
          heroText: 'rgba(255, 255, 255, 0.70)',
          heroTextBtn: '#FCD980',
          howWeWork: '#282938',
          howWeWork2: 'rgba(40, 41, 56, 0.70)',
          howWeWork3: 'rgba(40, 41, 56, 0.80)',
          darkbulu: 'rgba(40, 41, 56, 0.70)',
          pppp: 'rgba(255, 255, 255, 0.80)',
          Desing: '#D9D9D9',
          contact: 'rgba(37, 5, 242, 0.87)',
          Number: '#2405F2',
          border: '#ECECF1',
          Grey: 'rgba(244, 246, 252, 0.80)',
          hoverColor2: 'rgba(28, 30, 83, 0.50)',
          form: '#1C1E53',
          inputColor: 'rgba(244, 246, 252, 0.50)',
          borderColor: 'rgba(255, 255, 255, 0.05)',
          Submithover: '#FCD980',
          contectbg: '#FCD980',
      },
      // color

      // container
      width: {
          container: '1280px',
        },
      // container

      // font
      fontWeight: {
          light: '300',
          normal: '400',
          medium: '500',
          semibold: '600',
          bold: '700',
          extrabold: '800',
        },

        fontFamily: {
          Manrope: ['Manrope', 'sans-serif'],
          Poppins: ['Poppins', 'sans-serif'],
        },
        
        fontSize: {
          sm: '24px',
        },
      // font

      // background
      backgroundImage: {
          Background: "url('./image/Background.png')",
          Card: "url('./image/Card.png')",
          bgCard: "url('./image/bgCard.png')",
          Rectangle: "url('./image/Rectangle.png')",
          Rectangle1: "url('./image/Rectangle1.png')",
          woman: "url('./image/woman.png')",
          bulu: "url('./image/4444.png')",
      },
      // background

      // border
      borderRadius: {
          input: '8px',
        }
      // border
    }
  }
}