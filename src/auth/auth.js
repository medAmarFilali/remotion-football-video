import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";

export const signInUser = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);

    console.log("User: ", user);

    // store the token in session storage
    const token = user.user.refreshToken;
    sessionStorage.setItem("token", token);
    return user;
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    sessionStorage.removeItem("token");
  } catch (err) {
    console.log(err.message);
  }
};
