import { GET_RESUME_DATA } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_RESUME_DATA:
      return {
        ...state,
        resume: action.payload
      };

    default:
      return {
        ...state
      };
  }
};
