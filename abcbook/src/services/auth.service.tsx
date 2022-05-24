export interface authUser {
    id: string;
    role: string;
    name: string;
    dataJoined: string;
    email: string;
    password: string;
}
const logout = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('role');
};
const login = async (userEmail: string, userPassword: string): Promise<any> => {
    const response = await fetch('mockData/mockUser.json');
    const responseData = await response.json();
    const authUser = responseData.find((u: any) => {
        return u.email === userEmail && u.password === userPassword;
    });
    return authUser;
};
const register = () => {};

const AuthService = {
    register,
    login,
    logout
};

export default AuthService;
