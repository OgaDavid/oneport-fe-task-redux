/* 
This function generates action types based on the provided action name.

@param action - The action name as a string.
@return An object containing three action types: REQUEST, SUCCESS, and FAILURE.
*/

export const generateActions = (action: string) => {
  action = action.toUpperCase();
  return {
    REQUEST: `${action}_REQUEST`,
    SUCCESS: `${action}_SUCCESS`,
    FAILURE: `${action}_FAILURE`,
  };
};
