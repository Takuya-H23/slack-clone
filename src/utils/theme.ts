import { createMuiTheme } from '@material-ui/core/styles'

export const lightTheme = createMuiTheme({
  palette: {
    text: {
      primary: '#1d1d1d',
      secondary: '#ffffff'
    },
    background: {
      default: '#ffffff',
      paper: '#f6efe8'
    },
    primary: {
      main: '#4a154b'
    }
  },
  typography: {
    fontFamily: 'Arimo'
  }
})

lightTheme.typography.h1 = {
  fontWeight: 700,
  fontSize: '3.5rem',
  color: '#000000',
  [lightTheme.breakpoints.down('md')]: {
    fontSize: '3.5rem'
  },
  [lightTheme.breakpoints.down('sm')]: {
    fontSize: '3rem'
  },
  [lightTheme.breakpoints.down('xs')]: {
    fontSize: '2.5rem'
  }
}

lightTheme.typography.h2 = {
  fontWeight: 700,
  fontSize: '2rem',
  [lightTheme.breakpoints.up('sm')]: {
    fontSize: '2.3rem'
  },
  [lightTheme.breakpoints.up('md')]: {
    fontSize: '2.8rem'
  }
}

lightTheme.typography.body1 = {
  fontSize: '1rem',
  lineHeight: 1.333
}
