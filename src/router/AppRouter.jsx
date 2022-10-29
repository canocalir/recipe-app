import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Home />} />
        <Route path="details/:recipeId" element={<Details />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="login" element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
