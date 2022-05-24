import classes from './Login.module.css';
import logo from '../assets/user.svg';
import useLoginForm from '../hooks/use-loginForm';

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

    const emailInputClasses = inputEmailHasError ? classes.formLabelInvalid : classes.formLabel;
    const passwordInputClasses = inputPasswordHasError
        ? classes.formLabelInvalid
        : classes.formLabel;

    let isFormValid = false;
    if (inputEmailIsValid && inputPasswordIsValid) {
        isFormValid = true;
    }

    const onFormSubmit = (event: any) => {
        event.preventDefault();
        if (!isFormValid) {
            return;
        }
        console.log(inputEmail);
        console.log(inputPassword);

        resetinputEmail();
        resetinputPassword();
    };

    return (
        <div className={classes.formContainer} onSubmit={onFormSubmit}>
            <form className={classes.form}>
                <img src={logo} alt="user-logo" className={classes.formLogo} />
                <div className={emailInputClasses}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="text"
                        className={classes.formInput}
                        value={inputEmail}
                        onChange={inputEmailValueHandler}
                        onBlur={inputEmailBlurHandler}
                    />
                    {inputEmailHasError && (
                        <p className={classes.errorText}>Email not in the correct format</p>
                    )}
                </div>
                <div className={passwordInputClasses}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className={classes.formInput}
                        value={inputPassword}
                        onChange={inputPasswordValueHandler}
                        onBlur={inputPasswordBlurHandler}
                    />
                    {inputPasswordHasError && (
                        <p className={classes.errorText}>Password cannot be empty</p>
                    )}
                </div>
                <div>
                    <button className={classes.formButton} disabled={!isFormValid}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
