import { call, put, takeEvery } from "redux-saga/effects";
import { getSpecialRateSuccess } from "./action";
import { GET_SPECIAL_RATE } from "./constants";
import rateServices from "@/api/services/rates";

/* eslint-disable @typescript-eslint/no-explicit-any */
function* getSpecialRate({ payload }: any) {
  try {
    const { data } = payload;
    const response = yield call(rateServices.getSpecialRate, data);
    if (response.data.status === "success") {
      yield put(getSpecialRateSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
  }
}

function* ratesSaga() {
  yield takeEvery(GET_SPECIAL_RATE.REQUEST, getSpecialRate);
}

export default ratesSaga;
