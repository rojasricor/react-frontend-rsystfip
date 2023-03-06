import { Navigate, Outlet } from "react-router-dom";

export function ProtectedElement({ children, isAllowed }) {
  if (isAllowed) {
    return children;
  }
}

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
