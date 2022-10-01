import {combineReducers, createStore} from "redux";
import {artistReducer} from "./reducers/artistReducer";
import {trackReducer} from "./reducers/trackReducer";
import {albumReducer} from "./reducers/albumReducer";
import {tokenReducer} from "./reducers/tokenReducer";
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({tokenReducer, artistReducer, trackReducer, albumReducer})

const store = createStore(rootReducer,  composeWithDevTools())

export default store
