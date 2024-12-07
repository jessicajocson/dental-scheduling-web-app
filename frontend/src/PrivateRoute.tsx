import { Navigate } from "react-router-dom";
import { useAppSelector } from "./states/hook";

// Define the types for the props
interface ProtectedRouteProps {
  element: React.ComponentType<any>;  // This allows any component to be passed in
  [key: string]: any;  // This allows additional props to be passed to the component
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element: Component, ...rest }) => {
  const isAuthenticated = useAppSelector((state) => state.Token.token);

  // If authenticated, render the component; otherwise, redirect to login
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;


// import {Navigate} from  "react-router-dom";
// import useAuthStore from "../src/states/stores/auth-store";

// export enum ProtectionType {
//     AuthOnly
// }

// interface IPrivateRouteProps {
//     protectionType?: ProtectionType;
//     children: React.ReactNode;
// }

// const PrivateRoute : React.FC<IPrivateRouteProps> = () => {
//     const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

//     if (!isAuthenticated) {
//         console.log("isAuthenticated:", isAuthenticated);
//         return <Navigate to="/login" replace />;
//     }
// }

// export default PrivateRoute