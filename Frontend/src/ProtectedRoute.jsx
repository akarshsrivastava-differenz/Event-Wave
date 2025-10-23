import { useUser } from "./contexts/UserContext";
import { Outlet, Navigate } from "react-router";

const ProtectedRoutes = () => {

  const { isAuthenticated, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;