import { Navigate } from "react-router";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return (
    <>{children}</>
  )
}

export default AuthGuard;