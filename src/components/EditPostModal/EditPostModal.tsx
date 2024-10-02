import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import {
  inputStyles,
  modalBodyStyles,
  addItemButtonStyles,
  modalContent,
  editButtonStyles,
} from './styles'
import { useContext, useState } from 'react'
import { PostListContext } from '@/app/providers'
import { PostType } from '@/types'

type Props = {
  id: string
  initialInputValue: string
  initialTextareaValue: string
}

export const EditPostModal = ({ id, initialInputValue, initialTextareaValue }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [inputValue, setInputValue] = useState(initialInputValue)
  const [textareaValue, setTextareaValue] = useState(initialTextareaValue)

  const { setPostList, postList } = useContext(PostListContext)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const editedPostList: PostType[] = postList.map((post) => {
      if (post.id === id)
        return {
          id,
          title: inputValue,
          description: textareaValue,
        }
      return post
    })

    setPostList(editedPostList)
    localStorage.setItem('postList', JSON.stringify(editedPostList))
    onClose()
  }

  return (
    <>
      <Button {...editButtonStyles} onClick={onOpen}>
        Изменить
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent {...modalContent}>
          <ModalHeader>Изменение поста</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody {...modalBodyStyles}>
              <FormControl isRequired>
                <FormLabel>Заголовок</FormLabel>
                <Input {...inputStyles} value={inputValue} onChange={handleInputChange} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Описание</FormLabel>
                <Textarea {...inputStyles} value={textareaValue} onChange={handleTextareaChange} />
              </FormControl>
              <Button {...addItemButtonStyles}>Изменить</Button>
            </ModalBody>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}
