import { postList } from '@/constants'
import { PostType } from '@/types'
import { createContext, PropsWithChildren, useState } from 'react'

type InitialType = {
  postList: PostType[]
  setPostList: React.Dispatch<React.SetStateAction<PostType[]>>
}

const initialValue: InitialType = {
  postList: postList,
  setPostList: () => {},
}

export const PostListContext = createContext<InitialType>(initialValue)

export const PostListProvider = ({ children }: PropsWithChildren) => {
  const [postList, setPostList] = useState<PostType[]>([])

  return (
    <PostListContext.Provider value={{ postList, setPostList }}>
      {children}
    </PostListContext.Provider>
  )
}
