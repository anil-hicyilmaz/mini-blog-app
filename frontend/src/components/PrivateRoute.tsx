import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps): React.ReactElement {
  const token = localStorage.getItem('access');

  return token ? <>{children}</> : <Navigate to="/login" replace />;
}
