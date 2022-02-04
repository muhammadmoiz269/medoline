import React, { useState } from "react";
import SignInForm from "../../Component/SignInForm/SignInForm";
import SignUpForm from "../../Component/SignUpForm/SignUpForm";
import GoogleSignInBtn from "../../Component/GoogleSignInBtn/GoogleSignInBtn";
import MaterialUibutton from "../../Component/MaterialUibutton/MaterialUibutton";

const Authentication = () => {
  var [formType, setformType] = useState("sign-in");
  console.log("Auth");
  return (
    <div>
      {formType === "sign-in" ? (
        <div>
          <SignInForm />
          <MaterialUibutton
            style={{ position: "absolute", left: "90%", bottom: "7%" }}
            onClick={() => setformType("sign-up")}
          >
            Sign Up
          </MaterialUibutton>
          <MaterialUibutton
            style={{ position: "absolute", left: "60%", bottom: "7%" }}
          >
            <GoogleSignInBtn />
          </MaterialUibutton>
        </div>
      ) : (
        <div>
          <SignUpForm />
          <MaterialUibutton
            style={{ position: "absolute", left: "58%", bottom: "10%" }}
            onClick={() => setformType("sign-in")}
          >
            Sign In
          </MaterialUibutton>
        </div>
      )}
    </div>
  );
};

export default Authentication;
