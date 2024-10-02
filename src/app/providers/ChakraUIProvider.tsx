import { PropsWithChildren } from 'react'
import { theme } from '../theme'
import { ChakraProvider } from '@chakra-ui/react'

export const ChakraUIProvider = ({ children }: PropsWithChildren) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
