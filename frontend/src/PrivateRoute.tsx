import {Navigate} from  "react-router-dom";
import useAuthStore from "../src/states/stores/auth-store";

export enum ProtectionType {
    AuthOnly
}

// interface IPrivateRouteProps {
//     protectionType?: ProtectionType;
//     children: React.ReactNode;
// }

const PrivateRoute = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
}

export default PrivateRoute