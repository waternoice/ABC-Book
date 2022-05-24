import classes from './Login.module.css';
import logo from '../assets/user.svg';
import useLoginForm from '../hooks/use-loginForm';
import AuthService from '../services/auth.service';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    Image,
    Flex,
    Heading
} from '@chakra-ui/react';

const Login = () => {
    let regrex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const {
        value: inputEmail,
        isValid: inputEmailIsValid,
        hasError: inputEmailHasError,
        valueInputHandler: inputEmailValueHandler,
        valueBlurHandler: inputEmailBlurHandler,
        reset: resetinputEmail
    } = useLoginForm((value: any) => value.match(regrex));

    const {
        value: inputPassword,
        isValid: inputPasswordIsValid,
        hasError: inputPasswordHasError,
        valueInputHandler: inputPasswordValueHandler,
        valueBlurHandler: inputPasswordBlurHandler,
        reset: resetinputPassword
    } = useLoginForm((value: any) => value.trim() !== '');

    let isFormValid = false;
    if (inputEmailIsValid && inputPasswordIsValid) {
        isFormValid = true;
    }

    const onFormSubmit = async (event: any) => {
        event.preventDefault();
        if (!isFormValid) {
            return;
        }
        const userData = await AuthService.login(inputEmail, inputPassword);
        if (userData) {
            sessionStorage.setItem('user', userData.name);
            sessionStorage.setItem('role', userData.role);
            sessionStorage.setItem('isLoggedin', 'true');
            console.log('logged in successfully');
        }

        resetinputEmail();
        resetinputPassword();
    };

    return (
        <div className={classes.formContainer}>
            <Heading color="teal" size="2xl">
                ABC-Book
            </Heading>
            <form className={classes.form} onSubmit={onFormSubmit}>
                <Flex pb={2} alignSelf="center">
                    <Image src={logo} alt="user-logo" boxSize="50px" />
                </Flex>
                <FormControl isInvalid={inputEmailHasError}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                        type="email"
                        id="text"
                        value={inputEmail}
                        onChange={inputEmailValueHandler}
                        onBlur={inputEmailBlurHandler}
                    />
                    {inputEmailHasError && (
                        <FormErrorMessage>Email not in the correct format</FormErrorMessage>
                    )}
                </FormControl>
                <FormControl isInvalid={inputPasswordHasError}>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input
                        type="password"
                        id="password"
                        value={inputPassword}
                        onChange={inputPasswordValueHandler}
                        onBlur={inputPasswordBlurHandler}
                    />
                    {inputPasswordHasError && (
                        <FormErrorMessage>Password cannot be empty</FormErrorMessage>
                    )}
                </FormControl>
                <FormControl>
                    <Button colorScheme="teal" mt={2} isDisabled={!isFormValid} type="submit">
                        Login
                    </Button>
                </FormControl>
            </form>
        </div>
    );
};

export default Login;
