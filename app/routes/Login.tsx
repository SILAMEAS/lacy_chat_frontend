
import BrandSection from "~/components/brand-section";
import type { Route } from "./+types/Login";
import LoginForm from "~/components/login-from";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Welcome to the Login page!" },
  ];
}
export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Branding */}
      <BrandSection />

      {/* Right Section - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance">
              Welcome to {import.meta.env.VITE_APP_NAME}
            </h1>
            <p className="text-muted-foreground">
              Sign in with your Google account to get started
            </p>
          </div>

          <LoginForm setIsLoading={setIsLoading} isLoading={isLoading} />

          <p className="text-center text-sm text-muted-foreground mt-8 hidden">
            New to ChatApp?{' '}
            <a href="#" className="text-primary font-semibold hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
