import { defineStyle, HeadingProps } from '@chakra-ui/react'

export const headerStackStyles = defineStyle({
  justifyContent: 'space-between',
  w: '100%',
  p: '12px 0.5rem',
  flexDirection: { base: 'column', md: 'row' },
  alignItems: 'center',
  gap: { base: '22px', md: '8px' },
})

export const headingStyles = defineStyle({
  as: 'h1',
  fontWeight: 500,
  fontSize: { base: '30px', sm: '36px', lg: '38px' },
  textAlign: { base: 'center', md: 'start' },
}) as HeadingProps
