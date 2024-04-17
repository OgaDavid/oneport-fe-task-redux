import { GET_SPECIAL_RATE } from "./constants";

const initialState = {
  error: "",
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
  }

  return state;
};

export default rates;
