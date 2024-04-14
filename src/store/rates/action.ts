import { GET_SPECIAL_RATE } from "./constants";

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Action creator for getting a special rate.
 * @param data - The data for the special rate request.
 * @returns An action object with the type and payload.
 */
export const getSpecialRate = (data: any) => {
  return {
    type: GET_SPECIAL_RATE.REQUEST,
    payload: { data },
  };
};

/**
 * Action creator for successful retrieval of a special rate.
 * @param response - The response containing the special rate data.
 * @returns An action object with the type and payload.
 */
export const getSpecialRateSuccess = (response: any) => {
  return {
    type: GET_SPECIAL_RATE.SUCCESS,
    payload: response,
  };
};

/**
 * Action creator for failure in retrieving a special rate.
 * @param Response - The response containing the error information.
 * @returns An action object with the type and payload.
 */
export const getSpecialRateFailure = (Response: any) => {
  return {
    type: GET_SPECIAL_RATE.FAILURE,
    payload: Response,
  };
};
