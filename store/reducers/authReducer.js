const initState = {
  auth: true,
};
import {
  AUTH_OBSERVER,
  LOGIN_USER,
  REGISTER_USER,
} from "../actions/authAction";

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        auth: false,
        user: action.payload,
        token: action.payload.user.accessToken,
      };
    case LOGIN_USER:
      return {
        ...state,
        auth: true,
        user: action.payload,
        token: action.payload.user.accessToken,
      };
    case AUTH_OBSERVER:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
