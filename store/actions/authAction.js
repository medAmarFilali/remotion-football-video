import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { signInUser, signOutUser } from "../../src/auth/auth";
import { auth } from "../../src/config/firebase-config";

export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const AUTH_OBSERVER = "AUTH_OBSERVER";
export const LOGOUT_USER = "LOGOUT_USER";

export const logoutUser = () => async (dispatch) => {
  try {
    await signOutUser();
    dispatch({
      type: LOGOUT_USER,
      payload: {
        auth: false,
        user: {},
        token: "",
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const registerUser = (email, password) => async (dispatch) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    dispatch({ type: REGISTER_USER, payload: user });
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const user = signInUser(email, password);

    dispatch({ type: LOGIN_USER, payload: user });
  } catch (err) {
    console.log(err.message);
  }
};

export const authObserver = () => async (dispatch) => {
  try {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: AUTH_OBSERVER,
          payload: {
            auth: true,
            user: user,
            token: user.accessToken,
          },
        });
      } else {
        console.log("User is logged out!!!");
        dispatch({
          type: AUTH_OBSERVER,
          payload: {
            auth: false,
            user: {},
            token: "",
          },
        });
      }
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};
