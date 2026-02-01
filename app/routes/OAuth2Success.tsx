import { useEffect } from "react";
import type { Route } from "./+types/OAuth2Success";
import { useNavigate } from "react-router";
import { setTokens } from "~/redux/slice/userSlice";
import { useAppDispatch } from "~/redux/hooks/useRedux";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "OAuth2 Success" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function OAuth2Success() {
  const navigate = useNavigate();
  // const {setToken}=useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    // 1. Read token from URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      navigate("/login", { replace: true });
      return;
    }

    // 1️⃣ Store token (memory)
    console.log("OAuth2 token:", token);
    dispatch(setTokens({ accessToken: token, refreshToken: "" }));

    // 2️⃣ Clean URL (VERY IMPORTANT)
    window.history.replaceState({}, "", "/");


    // 4️⃣ Continue app
    navigate("/", { replace: true });
  }, []);

  return <p>Logging you in...</p>;
}
