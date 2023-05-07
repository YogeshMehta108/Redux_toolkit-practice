import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/users';

function LoginPage() {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(login({ name: "Paras", age: 26, mobile: "9939939931" }))}>Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}

export default LoginPage