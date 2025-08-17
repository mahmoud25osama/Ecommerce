import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Navigate to='/login' />
  }
  return <>
    {children}
  </>
}
