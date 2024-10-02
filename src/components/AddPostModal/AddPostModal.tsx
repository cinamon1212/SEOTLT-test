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
  newPostButtonStyles,
  inputStyles,
  modalBodyStyles,
  addItemButtonStyles,
  modalContent,
} from './styles'
import { useContext, useState } from 'react'
import { PostListContext } from '@/app/providers'
import { createNewPost, getStoragePostList } from '@/utils'
import { v4 as uuidv4 } from 'uuid'

export const AddPostModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [inputValue, setInputValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')

  const { setPostList } = useContext(PostListContext)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newPostId = uuidv4()
    const newPost = createNewPost(inputValue, textareaValue, newPostId)
    setPostList((prev) => [...prev, newPost])
    const storageList = getStoragePostList()
    if (!storageList) localStorage.setItem('postList', JSON.stringify([newPost]))
    else {
      const parsedStorageList = JSON.parse(storageList)
      localStorage.setItem('postList', JSON.stringify([...parsedStorageList, newPost]))
    }
    setInputValue('')
    setTextareaValue('')
    onClose()
  }

  return (
    <>
      <Button {...newPostButtonStyles} onClick={onOpen}>
        Новый пост
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent {...modalContent}>
          <ModalHeader>Добавление нового поста</ModalHeader>
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
              <Button {...addItemButtonStyles}>Добавить</Button>
            </ModalBody>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}
