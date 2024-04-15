import {
  GET_SPECIAL_RATE,
  SET_SPECIAL_RATE_SIZE,
  SET_SPECIAL_RATE_TYPE,
} from "./constants";

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

export const getSpecialRateFailure = (Response: any) => {
  return {
    type: GET_SPECIAL_RATE.FAILURE,
    payload: Response,
  };
};

export const setSpecialRateSize = (size: string) => {
  return {
    type: SET_SPECIAL_RATE_SIZE,
    payload: size,
  };
};

export const setSpecialRateType = (type: string) => {
  return {
    type: SET_SPECIAL_RATE_TYPE,
    payload: type,
  };
};
