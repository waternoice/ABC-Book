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
import { useAppDispatch } from '../../store/hooks';
import { usersActions } from '../../store/users';

const isEmpty = (value: any) => value.trim() !== '';

const Usermodal = (props: any) => {
    const dispatch = useAppDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isAdd = props.isAdd;
    const {
        value: inputName,
        valueIsValid: inputNameIsValid,
        valueInputHandler: inputNameChangeHandler,
        reset: resetName
    } = useUserForm(isEmpty, isAdd, props.username);
    const {
        value: inputRole,
        valueIsValid: inputRoleIsValid,
        valueInputHandler: inputRoleChangeHandler,
        reset: resetRole
    } = useUserForm(isEmpty, isAdd, props.role);
    const {
        value: inputPassword,
        valueIsValid: inputPasswordIsValid,
        valueInputHandler: inputPasswordChangeHandler,
        reset: resetPassword
    } = useUserForm(isEmpty, isAdd, props.password);
    const {
        value: inputEmail,
        valueIsValid: inputEmailIsValid,
        valueInputHandler: inputEmailChangeHandler,
        reset: resetEmail
    } = useUserForm(isEmpty, isAdd, props.email);
    const {
        value: inputDate,
        valueIsValid: inputDateIsValid,
        valueInputHandler: inputDateChangeHandler,
        reset: resetDate
    } = useUserForm(isEmpty, isAdd, props.dateJoined);

    let validForm = false;
    if (
        inputDateIsValid &&
        inputEmailIsValid &&
        inputNameIsValid &&
        inputPasswordIsValid &&
        inputRoleIsValid
    ) {
        validForm = true;
    }

    const submitHandler = () => {
        if (isAdd) {
            dispatch(
                usersActions.addUser({
                    id: props.id + 1,
                    role: inputRole,
                    username: inputName,
                    email: inputEmail,
                    dateJoined: inputDate,
                    password: inputPassword
                })
            );
        }
        if (!isAdd) {
            dispatch(
                usersActions.updateUser({
                    id: props.id,
                    role: inputRole,
                    username: inputName,
                    email: inputEmail,
                    dateJoined: inputDate,
                    password: inputPassword
                })
            );
        }

        resetDate();
        resetEmail();
        resetName();
        resetRole();
        resetPassword();
        onClose();
    };

    return (
        <>
            {isAdd && <Button onClick={onOpen}>Add user</Button>}
            {!isAdd && <Button onClick={onOpen}>Edit user</Button>}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    {isAdd && <ModalHeader>Add User</ModalHeader>}
                    {!isAdd && <ModalHeader>Edit User</ModalHeader>}
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input
                                placeholder="Name"
                                onChange={inputNameChangeHandler}
                                value={inputName}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel htmlFor="role">Role</FormLabel>
                            <Select
                                id="role"
                                placeholder="Select role"
                                onChange={inputRoleChangeHandler}
                                value={inputRole}
                            >
                                <option>admin</option>
                                <option>editor</option>
                                <option>member</option>
                            </Select>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Password</FormLabel>
                            <Input
                                placeholder="Password"
                                onChange={inputPasswordChangeHandler}
                                value={inputPassword}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                placeholder="Email"
                                onChange={inputEmailChangeHandler}
                                value={inputEmail}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Date Joined</FormLabel>
                            <Input
                                placeholder="YYYY-MM-DD"
                                onChange={inputDateChangeHandler}
                                value={inputDate}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="blue"
                            mr={3}
                            isDisabled={!validForm}
                            onClick={submitHandler}
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

export default Usermodal;
