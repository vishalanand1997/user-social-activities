export const SignUpFunc = (data) => {
    return {
        type: "SIGNUP",
        payload: data
    }
}
export const Login = (data) => {
    return {
        type: "LOGIN"
    }
}