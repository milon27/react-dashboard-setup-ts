import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import URL from '../../utils/constant/URL';
import { StateContext } from '../../utils/context/MainContext';
import { UserNotLoggedIn } from '../../utils/models/User';

export default function ProtectedRoute(props: {
    children: React.ReactNode
}) {
    const { user } = useContext(StateContext);

    // send to login page if not logged in
    if (user == UserNotLoggedIn) {
        return <Navigate to={URL.LOGIN} />;
    }

    return (
        <>{props.children}</>
    )
}
