import { Heading, Stack } from '@chakra-ui/react'
import { headerStackStyles, headingStyles } from './styles'
import { AddPostModal } from '../AddPostModal'

export const Header = () => {
  return (
    <Stack {...headerStackStyles}>
      <Heading {...headingStyles}>Список новостей</Heading>
      <AddPostModal />
    </Stack>
  )
}
