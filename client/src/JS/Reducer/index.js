import {combineReducers} from "redux";

import { userReducer } from "../Reducer/userReducer";

export const rootReducer = combineReducers({userReducer});