import { createStore } from "redux";
import { rootReducer } from "./redux/reducers/index"
export const store = createStore(rootReducer)