import { AccordionItemProps, defineStyle, HeadingProps } from '@chakra-ui/react'

export const buttonStyles = defineStyle({
  _hover: { bgColor: 'gray.800' },
  w: 'auto',
  h: { base: '28px', sm: '32px', md: '42px' },
  fontSize: { base: '12px', sm: '14px', md: '16px' },
  variant: 'outline',
})

export const accordionItemStyles = defineStyle({
  _hover: { bgColor: 'gray.700' },
  as: 'li',
  style: { listStyle: 'none' },
}) as AccordionItemProps

export const accordionTitleStyles = defineStyle({
  as: 'h3',
  flex: '1',
  textAlign: 'left',
  fontSize: { base: '14px', sm: '16px', md: '18px' },
  color: 'white',
  textTransform: 'uppercase',
  fontWeight: 400,
}) as HeadingProps

export const accordionPanelStyles = defineStyle({
  px: { base: '16px', sm: '22px', md: '30px' },
  display: 'flex',
  gap: { base: '16px', sm: '24px', md: '32px' },
  alignItems: { base: 'normal', lg: 'center' },
  justifyContent: 'space-between',
  flexDirection: { base: 'column', lg: 'row' },
})

export const accordionDescriptionStyles = defineStyle({
  fontSize: { base: '12px', sm: '14px', md: '16px' },
  color: 'gray.300',
  maxW: { base: '100%', lg: '70%' },
})

export const buttonContainerStyles = defineStyle({
  gap: '16px',
  justifyContent: { base: 'flex-end', lg: 'center' },
})

export const accordionButtonStyles = defineStyle({
  h: { base: '48px', sm: '62px' },
})
