import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

export default function RedirectIfAuthenticated({ children }) {
    const { userToken } = useContext(AuthContext);

    if (userToken) {
        return <Navigate to="/" />;
    } else {
        return children;
    }
}