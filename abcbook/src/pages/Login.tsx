import classes from './Login.module.css';
import logo from '../assets/user.svg';

const Login = () => {
    return (
        <div className={classes.formContainer}>
            <form className={classes.form}>
                <img src={logo} alt="user-logo" className={classes.formLogo} />
                <div className={classes.formLabel}>
                    <label htmlFor="username">Username</label>
                    <input type="username" id="text" className={classes.formInput} required />
                </div>
                <div className={classes.formLabel}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className={classes.formInput} required />
                </div>
                <div>
                    <button className={classes.formButton}>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
