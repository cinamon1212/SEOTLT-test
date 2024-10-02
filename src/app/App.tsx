import { VStack } from '@chakra-ui/react'
import { Header, PostList } from '@/components'
import { mainStyles } from './styles'
import { ChakraUIProvider, PostListProvider } from './providers'

export const App = () => {
  return (
    <ChakraUIProvider>
      <PostListProvider>
        <VStack {...mainStyles}>
          <Header />
          <PostList />
        </VStack>
      </PostListProvider>
    </ChakraUIProvider>
  )
}
