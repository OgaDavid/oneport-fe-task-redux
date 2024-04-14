import { combineReducers } from "redux";
import rates from "@/store/rates/reducer";

const rootReducer = combineReducers({
  rates,
});

export default rootReducer;
