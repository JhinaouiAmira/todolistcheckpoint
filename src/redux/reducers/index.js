import { combineReducers } from "redux";
import taskReducer from "./toDoReducers";
const rootReducers = combineReducers({ taskReducer });

export default rootReducers;
