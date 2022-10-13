export const UserLoading = undefined
export const UserNotLoggedIn = null
export type UserStateType = IUser | typeof UserLoading | typeof UserNotLoggedIn //undefined means loading | null means not logged in

interface IUser {
    id: number
    name: string
    email: string
    createdAt: string
}

export interface IUserLoginDto {
    email: string
    password: string
}

export interface IUserRegisterDto {
    name: string
    email: string
    password: string
}

export default IUser