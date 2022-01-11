const initialState = {
    userList: [
        {
            email: "vishal@signitysolutions.com",
            password: "123456",
            fname: "Vishal",
            lname: "Anand",
            interest: "Sports"
        }
    ]
};
export const LoginChanger = (state = initialState, action) => {
    switch (action.type) {
        case "SIGNUP":
            // return state = [...state, action.payload]
            return {
                userList: [
                    ...state.userList,
                    action.payload
                ]
            };
        default: return state
    }
}
