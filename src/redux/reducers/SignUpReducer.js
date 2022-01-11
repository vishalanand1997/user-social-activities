const initialState = [
    {
        email: "vishal@signitysolutions.com",
        password:"123456",
        fname:"Vishal",
        lname:"Anand",
        interest:"Sports"
    }
]
export const LoginChanger = (state = initialState, action) => {
    switch (action.type) {
        case "SIGNUP": return state;
        default: return state
    }
}
