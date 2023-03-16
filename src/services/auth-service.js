export const AUTH = {
    AUTH_TOKEN: '',
    AUTH_TOKEN_NAME: 'datacontent',
    IS_LOGGEDING: false
}

const autoLogin = () => {
    let userJSON = localStorage.getItem("USER");
    if (userJSON) {
        const user = JSON.parse(userJSON);
        AUTH.AUTH_TOKEN = user.token;
        AUTH.USER_ID = user.id;
    }
    if(AUTH.AUTH_TOKEN){
        AUTH.IS_LOGGEDING = true;
    }
}
const authService = {autoLogin, AUTH, };

export default authService;