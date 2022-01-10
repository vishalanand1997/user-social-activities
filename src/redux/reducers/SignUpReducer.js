const initialState = "Hello"
export const LoginChanger = (state = initialState, action) => {
    switch (action.type) {
        case "SIGNUP": return state;
        default : return state
    }
}
