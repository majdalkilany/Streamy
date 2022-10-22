import React, { useEffect } from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../../actions";

let auth;

const GoogleAuth = (props) => {
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "289798316602-odvmq0a3guq93120tjhpilebkts3gmep.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "newStreamy",
        })
        .then(() => {
          auth = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  });

  const onSignInClick = () => {
    auth.signIn();
  };

  const onSignOutClick = () => {
    auth.signOut();
  };

  const renderAuthButton = () => {
    if (props.isisSignedIn === null) {
      return null;
    } else if (props.isSignedIn) {
      return (
        <button onClick={onSignOutClick} className=" ui red google button">
          <i className="google icon" />
          sign Out
        </button>
      );
    } else {
      return (
        <button onClick={onSignInClick} className=" ui red google button">
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  };

  console.log(props);
  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      return props.signIn(auth.currentUser.get().getId());
    } else {
      return props.signOut();
    }
  };

  return <div>{renderAuthButton()}</div>;
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
