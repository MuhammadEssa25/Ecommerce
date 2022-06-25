import rootReducers from "./reducers";
import { legacy_createStore } from "redux";
export const store = legacy_createStore(rootReducers);

export default store;