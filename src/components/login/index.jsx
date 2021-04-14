import React from "react";
import FacebookIcon from "mdi-react/FacebookIcon";
import GooglePlusIcon from "mdi-react/GooglePlusIcon";
import LogInForm from "./LoginForm";
import { auth, facebookProvider, googleProvider } from "../../lib/authFirebase";
const LogIn = () => {
  const [user, setUser] = React.useState(null);
  const facebookLogin = () => {
    auth()
      .signInWithPopup(facebookProvider)
      .then(({ user }) => {
        setUser(user.providerData);
      });
  };
  const googleLogin = () => {
    auth()
      .signInWithPopup(googleProvider)
      .then(({ user }) => {
        setUser(user);
      });
  };

  return (
    <div className="account">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__head">
            <h3 className="account__title">
              Welcome to
              <span className="account__logo">
                {" "}
                Easy
                <span className="account__logo-accent">DEV</span>
              </span>
            </h3>
            <h4 className="account__subhead subhead">
              Start your business easily
            </h4>
          </div>
          <LogInForm onSubmit />
          <div className="account__or">
            <p>Or Easily Using</p>
          </div>
          <div className="account__social">
            <FacebookIcon onClick={() => facebookLogin()} />

            <GooglePlusIcon onClick={() => googleLogin()} />
          </div>
          {JSON.stringify(user)}
        </div>
      </div>
    </div>
  );
};

export default LogIn;

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
