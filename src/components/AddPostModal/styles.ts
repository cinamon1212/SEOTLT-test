import { ButtonProps, defineStyle, ModalBodyProps } from '@chakra-ui/react'

export const newPostButtonStyles = defineStyle({
  w: 'fit-content',
  alignSelf: { base: 'center', md: 'flex-end' },
})

export const modalBodyStyles = defineStyle({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  py: '32px',
}) as ModalBodyProps

export const inputStyles = defineStyle({
  focusBorderColor: 'gray.200',
  _hover: { borderColor: 'gray.400' },
})

export const addItemButtonStyles = defineStyle({
  w: 'fit-content',
  mx: 'auto',
  type: 'submit',
}) as ButtonProps

export const modalContent = defineStyle({
  maxW: '90%',
  w: '450px',
})
