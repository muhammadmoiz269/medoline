import {
  auth,
  serverTimeStamp,
  firestore,
  GoogleAuthProvider,
} from "../../Firebase/Firebase";
import { SET_USER, REMOVE_USER } from "./authConstants";
import firebase from "../../Firebase/Firebase";
import history from "../../history/history";
import { notification } from "antd";

export var setUser = (user) => ({
  type: SET_USER,
  payload: {
    user,
  },
});

export var RemoveUser = (user) => ({
  type: REMOVE_USER,
});

export var signup =
  ({ email, password, fullName }) =>
  async (dispatch) => {
    try {
      //create user on firebase section
      var {
        user: { uid },
      } = await auth.createUserWithEmailAndPassword(email, password);
      //store data of user on firestore
      var userInfo = {
        fullName,
        email,
        createdAt: serverTimeStamp(),
      };
      await firestore.collection("users").doc(uid).set(userInfo);
      //navigate to home page
      console.log("hello user");
      notification.success({
        message: "Success",
        description: "Account created successfully.",
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });

      history.push("/");
    } catch (error) {
      console.log(error);
      notification.error({
        message: "Error",
        description: error.message,
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
    }
  };

export var signin =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      //sign in user with auth
      await auth.signInWithEmailAndPassword(email, password);
      //navigate to home page
      console.log("email is", email, "pass is ", password);

      history.push("/home");
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.message,

        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
      console.log(error);
    }
  };

export var signout = () => async (dispatch) => {
  try {
    //signout user from firebase
    await auth.signOut();
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export var SignInWithGoogle = () => async (dispatch) => {
  try {
    //signin user in firebase auth google
    var {
      user: { displayName, email, uid },
      additionalUserInfo: { isNewUser },
    } = await auth.signInWithPopup(GoogleAuthProvider);
    if (isNewUser) {
      //if use new add information to firestore
      //store data of user on firestore
      var userInfo = {
        fullName: displayName,
        email,
        createdAt: serverTimeStamp(),
      };
      await firestore.collection("users").doc(uid).set(userInfo);
    }
    //navigate to home page
    history.push("/home");
  } catch (error) {
    console.log(error);
  }
};

//app auth state (centralized auth app manager for our app)
export var FirebaseAuthListener = () => async (dispatch) => {
  try {
    firebase.auth().onAuthStateChanged(async function (user) {
      if (user) {
        console.log("triggering user");
        var { uid } = user;
        //fetch user data from firestore
        var query = await firestore.collection("users").doc(uid).get();
        var { fullName, email } = query.data();

        var UserDataForState = {
          fullName,
          email,
          uid,
        };
        dispatch(setUser(UserDataForState));
      } else {
        dispatch(RemoveUser());
      }
    });
  } catch (error) {
    console.log(error);
  }
};
