import { Navigate, Outlet } from "react-router"
import { checkTokenInfo } from "~/libs/utils/checkTokenInfo"

export default function AuthLayoutRoute() {
//   const isAuthenticated = false // replace with real auth logic
// //   console.log("")

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />
//   }
// checkTokenInfo()
// console.log(checkTokenInfo())
  return (
    <div className="auth-layout min-h-screen">
      <Outlet />
    </div>
  )
}
