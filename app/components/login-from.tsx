import React, { useState } from 'react'
import { Button } from './ui/button'
import { UimGoogle } from 'public/icon/UimGoogle'
import { useProvider } from '~/utils/hooks/useProvider'

interface LoginFormProps {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export default function LoginForm({
  isLoading,
  setIsLoading,
}: LoginFormProps) {
    const {loginWithGoogle } = useProvider();
  const handleGoogleLogin = async () => {
    setIsLoading(true)
    // Google OAuth flow would be implemented here
    loginWithGoogle();

    // await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
  }

  return (
    <Button
      onClick={handleGoogleLogin}
      disabled={isLoading}
      size="lg"
      className="w-full h-12 bg-white hover:bg-slate-50 text-foreground border-2 border-border shadow-sm hover:shadow-md transition-all"
    >
      <UimGoogle className="w-5 h-5 mr-2" />
      {isLoading ? 'Signing in...' : 'Continue With Google'}
    </Button>
  )
}
