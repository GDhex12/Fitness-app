import { Routes, Route, Navigate } from "react-router-dom";
import AppRoute from "./AppRoute";
import DashboardPage from "../../pages/DashboardPage";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import PageNotFoundPage from "../../pages/PageNotFoundPage";
import UserSettingsPage from "../../pages/UserSettingsPage";
import PropTypes from "prop-types";

AppRoutes.propTypes = {
  isLoggedIn: PropTypes.bool,
};

function AppRoutes({ isLoggedIn }) {
  return (
    <Routes>
      <Route
        element={<AppRoute condition={isLoggedIn} redirectionPath={"/login"} />}
      >
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/userSettings" element={<UserSettingsPage />} />
        <Route path="/home" element={<HomePage />} />
      </Route>
      <Route
        element={
          <AppRoute condition={!isLoggedIn} redirectionPath={"/dashboard"} />
        }
      >
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Route>
      <Route path="*" element={<PageNotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
