import React, { createContext, useState } from 'react'
import { UserLoading, UserStateType } from '../models/User'

interface iState {
    user: UserStateType
    setUser: React.Dispatch<React.SetStateAction<UserStateType>>
}

export const StateContext = createContext<iState>({} as iState)

const MainContext = (props: React.PropsWithChildren<any>) => {
    const [user, setUser] = useState<UserStateType>(UserLoading)

    const global_state: iState = {
        user, setUser
    }

    return (
        <StateContext.Provider value={global_state}>
            {props.children}
        </StateContext.Provider>
    )
}

export default MainContext
