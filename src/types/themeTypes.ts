import { ThemeConfig, StyleProps } from '@chakra-ui/react'

export type ThemeType = {
  config: ThemeConfig
  styles: StylesType
}

export type StylesType = {
  global: Record<string, StyleProps>
}
