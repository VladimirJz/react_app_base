const DefaultPalette = (mode, themeColor) => {
  // ** Vars
  const lightColor = '6, 1, 8'
  const darkColor = '231, 227, 252'
  const mainColor = mode === 'light' ? lightColor : darkColor

  const primaryGradient = () => {
    if (themeColor === 'primary') {
      return '#c1c5c8'
    } else if (themeColor === 'secondary') {
      return '#9C9FA4'
    } else if (themeColor === 'success') {
      return '#93DD5C'
    } else if (themeColor === 'error') {
      return '#FF8C90'
    } else if (themeColor === 'warning') {
      return '#FFCF5C'
    } else {
      return '#c1c5c8'
    }
  }

  return {
    customColors: {
      main: mainColor,
      primaryGradient: primaryGradient(),
      tableHeaderBg: mode === 'light' ? '##3b2b46' : '##3b2b46'
    },
    common: {
      black: '#000',
      white: '#FFF'
    },
    mode: mode,
    primary: {
      light: '#333350',
      main: '#333350',
      dark: '#804BDF',
      contrastText: '#FFF'
    },
    secondary: {
      light: '#4f61c0',
      main: '#4f61c0',
      dark: '#4f61c0',
      contrastText: '#FFF'
    },
    success: {
      light: '#329560',
      main: '#329560',
      dark: '#329560',
      contrastText: '#FFF'
    },
    error: {
      light: '#e52b1e',
      main: '#e52b1e',
      dark: '#e52b1e',
      contrastText: '#FFF'
    },
    warning: {
      light: '#f0b421',
      main: '#f0b421',
      dark: '#f0b421',
      contrastText: '#FFF'
    },
    info: {
      light: '#394d41',
      main: '#394d41',
      dark: '#394d41',
      contrastText: '#FFF'
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#D5D5D5',
      A200: '#AAAAAA',
      A400: '#616161',
      A700: '#303030'
    },
    text: {
      primary: `rgba(${mainColor}, 0.87)`,
      secondary: `rgba(${mainColor}, 0.68)`,
      disabled: `rgba(${mainColor}, 0.38)`
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === 'light' ? '#FFF' : '#312D4B',
      default: mode === 'light' ? '#F4F5FA' : '#28243D'
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.3)`,
      disabledBackground: `rgba(${mainColor}, 0.18)`,
      focus: `rgba(${mainColor}, 0.12)`
    }
  }
}

export default DefaultPalette
