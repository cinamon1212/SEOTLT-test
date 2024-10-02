import { PostItem } from '../PostItem'
import { Accordion, Heading } from '@chakra-ui/react'
import { accordionStyles, headingStyles } from './styles'
import { PostType } from '@/types'
import { useContext, useLayoutEffect } from 'react'
import { getStoragePostList } from '@/utils'
import { PostListContext } from '@/app/providers'

export const PostList = () => {
  const { postList, setPostList } = useContext(PostListContext)

  useLayoutEffect(() => {
    const storageList = getStoragePostList()
    if (storageList) setPostList(JSON.parse(storageList))
  }, [])

  const handleDeleteItem = (id: string) => {
    const storageList = getStoragePostList()
    if (storageList) {
      const parsedList = JSON.parse(storageList) as PostType[]
      const filteredList = parsedList.filter((post) => post.id !== id)
      setPostList(filteredList)
      localStorage.setItem('postList', JSON.stringify(filteredList))
    }
  }

  return (
    <Accordion {...accordionStyles}>
      {postList.length ? (
        postList.map((post) => (
          <PostItem {...post} key={post.id} handleDeleteItem={handleDeleteItem} />
        ))
      ) : (
        <Heading {...headingStyles}>В списке нет постов</Heading>
      )}
    </Accordion>
  )
}
