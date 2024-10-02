import { defineStyle, StackProps } from '@chakra-ui/react'

export const mainStyles = defineStyle({
  as: 'main',
  w: '80%',
  mt: { base: '40px', sm: '80px', md: '120px' },
  mx: 'auto',
}) as StackProps
