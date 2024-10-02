import { PostType } from '@/types'

export const createNewPost = (title: string, description: string, id: string): PostType => ({
  title,
  description,
  id,
})
