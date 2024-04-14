import { all, fork } from "redux-saga/effects";
import ratesSaga from "./rates/saga";

export default function* rootSaga() {
  yield all([fork(ratesSaga)]);
}
