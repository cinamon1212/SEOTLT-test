import { VStack } from '@chakra-ui/react'
import { Header, PostList } from '@/components'
import { mainStyles } from './styles'
import { useEffect } from 'react'
import { postList } from '@/constants'
import { getStoragePostList } from '@/utils'
import { ChakraUIProvider, PostListProvider } from './providers'

export const App = () => {
  useEffect(() => {
    const storageList = getStoragePostList()
    if (!storageList) localStorage.setItem('postList', JSON.stringify(postList))
  }, [])

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
