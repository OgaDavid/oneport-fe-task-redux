import {
  GET_SPECIAL_RATE,
  SET_SPECIAL_RATE_SIZE,
  SET_SPECIAL_RATE_TYPE,
} from "./constants";

const initialState = {
  error: "",
  size: "20FT",
  type: "dry",
  getting_special_rates: false,
  special_rates: [] || {},
  total_special_rates: null,
};

const rates = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPECIAL_RATE.REQUEST:
      state = {
        ...state,
        getting_special_rates: true,
        error: "",
      };
      break;
    case GET_SPECIAL_RATE.SUCCESS:
      state = {
        ...state,
        getting_special_rates: false,
        special_rates: action.payload.data,
        total_special_rates: action.payload.total_rates,
      };
      break;
    case GET_SPECIAL_RATE.FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        getting_special_rates: false,
      };
      break;
    case SET_SPECIAL_RATE_SIZE:
      state = {
        ...state,
        size: action.payload,
      };
      break;
    case SET_SPECIAL_RATE_TYPE:
      state = {
        ...state,
        type: action.payload,
      };
      break;
  }

  return state;
};

export default rates;
