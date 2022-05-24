const logout = () => {
    sessionStorage.removeItem('user');
};
const login = () => {};
const register = () => {};
const getCurrentUser = () => {};
const AuthService = {
    register,
    login,
    logout,
    getCurrentUser
};
export default AuthService;
