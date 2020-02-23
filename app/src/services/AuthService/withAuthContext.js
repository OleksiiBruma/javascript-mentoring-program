import React from "react";
import AuthServiceContext from "./AuthServiceContext";
const withAuthContext = Component => props => {
    return (
      <AuthServiceContext.Consumer>
        {authContext => {
          return <Component {...props} authContext={authContext}  />;
        }}
      </AuthServiceContext.Consumer>
    );
  };
;
export default withAuthContext;
