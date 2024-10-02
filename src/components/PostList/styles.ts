import { AccordionProps, defineStyle, HeadingProps } from '@chakra-ui/react'

export const accordionStyles = defineStyle({
  allowToggle: true,
  w: '100%',
  as: 'ul',
}) as AccordionProps

export const headingStyles = defineStyle({
  as: 'h2',
  fontSize: { base: '20px', sm: '24px', lg: '28px' },
  textAlign: 'center',
  mt: { base: '120px', sm: '160px', md: '180px' },
}) as HeadingProps
