import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Select,
    Button
} from '@chakra-ui/react';
import useUserForm from '../../hooks/use-userForm';
import { booksActions } from '../../store/books';
import { useAppDispatch } from '../../store/hooks';

const isEmpty = (value: any) => value.trim() !== '';
const Bookmodal = (props: any) => {
    const isAdd = props.isAdd;
    const dispatch = useAppDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        value: inputTitle,
        valueIsValid: inputTitleIsValid,
        valueInputHandler: inputTitleChangeHandler,
        reset: resetTitle
    } = useUserForm(isEmpty, isAdd, props.title);
    const {
        value: inputDescription,
        valueIsValid: inputDescriptionIsValid,
        valueInputHandler: inputDescriptionChangeHandler,
        reset: resetDescription
    } = useUserForm(isEmpty, isAdd, props.description);
    const {
        value: inputGenre,
        valueIsValid: inputGenreIsValid,
        valueInputHandler: inputGenreChangeHandler,
        reset: resetGenre
    } = useUserForm(isEmpty, isAdd, props.genre);
    const {
        value: inputAuthor,
        valueIsValid: inputAuthorIsValid,
        valueInputHandler: inputAuthorChangeHandler,
        reset: resetAuthor
    } = useUserForm(isEmpty, isAdd, props.author);
    const {
        value: inputYear,
        valueIsValid: inputYearIsValid,
        valueInputHandler: inputYearChangeHandler,
        reset: resetYear
    } = useUserForm(isEmpty, isAdd, props.yearPublished);
    const {
        value: inputAvail,
        valueIsValid: inputAvailIsValid,
        valueInputHandler: inputAvailChangeHandler,
        reset: resetAvail
    } = useUserForm(isEmpty, isAdd, props.availability);
    const {
        value: inputBorrower,
        valueIsValid: inputBorrowerIsValid,
        valueInputHandler: inputBorrowerChangeHandler,
        reset: resetBorrower
    } = useUserForm(isEmpty, isAdd, props.lastBorrower);
    let validForm = false;
    if (
        inputTitleIsValid &&
        inputDescriptionIsValid &&
        inputGenreIsValid &&
        inputAuthorIsValid &&
        inputYearIsValid
    ) {
        validForm = true;
    }

    const submitHandler = () => {
        if (isAdd) {
            dispatch(
                booksActions.addBook({
                    id: props.id + 1,
                    title: inputTitle,
                    description: inputDescription,
                    author: inputAuthor,
                    genre: inputGenre,
                    published: inputYear,
                    availability: inputAvail,
                    lastBorrower: ''
                })
            );
        }
        if (!isAdd) {
            dispatch(
                booksActions.updateBook({
                    id: props.id,
                    title: inputTitle,
                    description: inputDescription,
                    author: inputAuthor,
                    genre: inputGenre,
                    published: inputYear,
                    availability: inputAvail,
                    lastBorrower: inputBorrower
                })
            );
        }

        resetTitle();
        resetDescription();
        resetAuthor();
        resetGenre();
        resetYear();
        resetAvail();
        resetBorrower();
        onClose();
    };
    return (
        <>
            {isAdd && <Button onClick={onOpen}>Add New Book</Button>}
            {!isAdd && <Button onClick={onOpen}>Update Book</Button>}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    {isAdd && <ModalHeader>Add New Book</ModalHeader>}
                    {!isAdd && <ModalHeader>Update Book</ModalHeader>}
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input
                                placeholder="Title"
                                value={inputTitle}
                                onChange={inputTitleChangeHandler}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Description</FormLabel>
                            <Input
                                placeholder="Description"
                                value={inputDescription}
                                onChange={inputDescriptionChangeHandler}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel htmlFor="genre">Genre</FormLabel>
                            <Select
                                id="role"
                                placeholder="Select Genre"
                                value={inputGenre}
                                onChange={inputGenreChangeHandler}
                            >
                                <option>action</option>
                                <option>fiction</option>
                                <option>romance</option>
                            </Select>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Author</FormLabel>
                            <Input
                                placeholder="Author"
                                value={inputAuthor}
                                onChange={inputAuthorChangeHandler}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Year Published</FormLabel>
                            <Input
                                placeholder="YYYY"
                                value={inputYear}
                                onChange={inputYearChangeHandler}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Availiability</FormLabel>
                            <Input
                                placeholder="Number of books available"
                                value={inputAvail}
                                onChange={inputAvailChangeHandler}
                            />
                        </FormControl>
                        {!isAdd && (
                            <FormControl mt={4}>
                                <FormLabel>Last Borrower</FormLabel>
                                <Input
                                    placeholder="Name"
                                    value={inputBorrower}
                                    onChange={inputBorrowerChangeHandler}
                                />
                            </FormControl>
                        )}
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={submitHandler}
                            isDisabled={!validForm}
                        >
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Bookmodal;
