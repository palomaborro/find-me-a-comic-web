import React, { useState, useEffect } from 'react';
import { login } from '../services/AuthService';
import { getCurrentUser } from '../services/UserService';
import { deleteAccessToken, getAccessToken, setAccessToken } from '../store/AccessTokenStore';

export const AuthContext = React.createContext({ user: undefined, token: undefined });

export default function AuthContextProvider({children}) {
    const [user, setUser] = useState();
    const [token, setToken] = useState(getAccessToken());

    useEffect(() => {
        if (token) {
            if (!user) {
                getCurrentUser()
                .then((user) => setUser(user))
                .catch(() => {
                    deleteAccessToken();
                    setToken(undefined)
                })
            }
        } else {
            setUser(undefined)
        }
    }, [token, user])

    const loginFunction = (email, password) => {
        return login(email, password)
        .then((response) => {
            setAccessToken(response.access_token)
            setToken(response.access_token)
        })
    }

    const logoutFunction =  () => {
        deleteAccessToken();
        setToken(undefined);
        setUser(undefined);
    }

    const value = { user: user, token: token, login: loginFunction, logoutFunction };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}