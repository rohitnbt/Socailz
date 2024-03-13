import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const ProtectedRoute = ({ children }) => {
        const userData = Cookies.get('UserData');
        if (!userData) {
            return <Navigate to="/login" />;
        }
    
        // Rendering the children only if the cookie value exists
        return children;
};
