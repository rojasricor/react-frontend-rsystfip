import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({
  children,
  isAllowed,
  navigateTo = "/auth/login",
}) {
  if (!isAllowed) {
    return <Navigate to={navigateTo} />;
  }

  return children ? children : <Outlet />;
}
