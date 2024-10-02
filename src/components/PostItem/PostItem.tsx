import { PostType } from '@/types'
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react'
import {
  accordionButtonStyles,
  accordionDescriptionStyles,
  accordionItemStyles,
  accordionPanelStyles,
  accordionTitleStyles,
  buttonContainerStyles,
  buttonStyles,
} from './styles'
import { EditPostModal } from '../EditPostModal'

type Props = {
  handleDeleteItem: (id: string) => void
} & PostType

export const PostItem = ({ description, title, handleDeleteItem, id }: Props) => {
  return (
    <AccordionItem {...accordionItemStyles}>
      <AccordionButton {...accordionButtonStyles}>
        <Heading {...accordionTitleStyles}>{title}</Heading>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel {...accordionPanelStyles}>
        <Text {...accordionDescriptionStyles}>{description}</Text>
        <HStack {...buttonContainerStyles}>
          <Button {...buttonStyles} onClick={() => handleDeleteItem(id)}>
            Удалить
          </Button>
          <EditPostModal id={id} initialInputValue={title} initialTextareaValue={description} />
        </HStack>
      </AccordionPanel>
    </AccordionItem>
  )
}
