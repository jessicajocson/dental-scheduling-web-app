import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../states/hook";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = useAppSelector((state) => state.Token.token);
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
