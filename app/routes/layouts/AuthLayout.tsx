import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "~/redux/hooks/useRedux";

export default function AuthLayout() {
  const accessToken = useAppSelector((state) => state.user.accessToken);
  return accessToken ? <Outlet /> : <Navigate to="/login" replace />;
}
