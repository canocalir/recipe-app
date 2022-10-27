import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("user");
  return user ? true : false;
};

const PublicRoute = () => {
  const auth = useAuth();

  return auth ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
