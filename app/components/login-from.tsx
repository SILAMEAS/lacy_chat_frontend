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
  // useGetUserQuery
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
      onClick={()=>{
        window.location.href = import.meta.env.VITE_OAUTH2_AUTHORIZATION_URL + '/google';
      }}
    
      disabled={isLoading}
      size="lg"
      className="w-full h-12 bg-white hover:bg-slate-50 text-foreground border-2 border-border shadow-sm hover:shadow-md transition-all"
    >
      <UimGoogle className="w-5 h-5 mr-2" />
      <a href={import.meta.env.VITE_OAUTH2_AUTHORIZATION_URL + '/google'}>{isLoading ? 'Signing in...' : 'Continue With Google'}</a>
      
    </Button>
  )
}
