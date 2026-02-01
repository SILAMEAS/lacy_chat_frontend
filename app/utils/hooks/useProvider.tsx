import React from 'react'
import { provider } from '../provider';

export const useProvider = () => {
    const loginWithGoogle = () => {
      window.location.href = provider.google.authorizationUrl;
    };
    const logout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/login";
  }
  return {loginWithGoogle,logout,provider}
}
