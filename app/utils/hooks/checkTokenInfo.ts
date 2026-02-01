import { jwtDecode } from "jwt-decode";

export function checkTokenInfo() {
   if (typeof window === "undefined") {
    // Server-side: no localStorage
    return null;
  }1
  const token = localStorage.getItem("accessToken");
  if (!token) return null;

  try {
    const payload = jwtDecode(token);
    if(typeof payload !== "object" || payload === null || !("exp" in payload)) {
        console.error("Invalid token payload");
        return null;
    }  
    if(typeof (payload as any).exp !== "number") {
        console.error("Invalid exp in token payload");
        return null;
    }
    if(!payload.exp) {
        console.log("No exp in token");
        return null;
    }

    if (Date.now() >= payload.exp * 1000) {
      console.log("Token expired");
      return null;
    }

    return payload;
  } catch (e) {
    console.error("Invalid token");
    return null;
  }
}

