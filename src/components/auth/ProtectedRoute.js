import React, { useContext } from "react";
import { Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";
import LoginOption from "../auth/LoginOption";
import AuthContext from "../../context/auth/authContext";

import PostState from "../../context/post/PostState";
import UserProfileState from "../../context/userProfile/UserProfileState";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  return isAuthenticated ? (
    <Route
      {...rest}
      render={(props) => (
        <UserProfileState>
          <PostState>
            <DashboardLayout>
              <Component {...props} />
            </DashboardLayout>
          </PostState>
        </UserProfileState>
      )}
    />
  ) : (
    <AuthLayout>
      <LoginOption />
    </AuthLayout>
  );
};

export default ProtectedRoute;
