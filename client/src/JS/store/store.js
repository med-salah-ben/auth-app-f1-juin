import { legacy_createStore as createStore  , applyMiddleware , compose} from "redux";
import { rootReducer } from "../Reducer";
import thunk from "redux-thunk"

const middleware = [thunk]

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)