export const SignUpFunc = (data) => {
    console.log("Dtaaaa1", data);
    return {
        type: "SIGNUP",
        payload: data
    }
}
export const Login = (data) => {
    console.log("Dtaaaa", data);
    return {
        type: "LOGIN"
    }
}