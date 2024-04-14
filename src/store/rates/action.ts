import { GET_SPECIAL_RATE } from "./constants";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getSpecialRate = (data: any) => {
  return {
    type: GET_SPECIAL_RATE.REQUEST,
    payload: { data },
  };
};

export const getSpecialRateSuccess = (response: any) => {
  return {
    type: GET_SPECIAL_RATE.SUCCESS,
    payload: response,
  };
};
