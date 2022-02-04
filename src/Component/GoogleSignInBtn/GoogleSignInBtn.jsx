import React from "react";
import { connect } from "react-redux";
import { SignInWithGoogle } from "../../Redux/auth/authActions";

const GoogleSignInBtn = ({ SignInWithGoogle }) => {
  return <div onClick={SignInWithGoogle}>Google Sign In</div>;
};

var actions = {
  SignInWithGoogle,
};
export default connect(null, actions)(GoogleSignInBtn);
