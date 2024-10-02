import { extendTheme } from '@chakra-ui/react'
import { config } from './config'
import { StylesType, ThemeType } from '@/types'

const styles: StylesType = {
  global: {
    '#root': {
      minH: '100vh',
    },
    body: {
      minH: '100vh',
      // fontFamily: `'Comfortaa Variable', sans-serif`,
      fontSize: '14px',
      fontWeight: 400,
    },
  },
}

export const theme = extendTheme({
  config,
  styles,
}) as ThemeType
