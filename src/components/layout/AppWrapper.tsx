import { PropsWithChildren, useContext, useEffect } from 'react'
import { StateContext } from '../../utils/context/MainContext';
import useMyQuery from '../../utils/hooks/UseMyQuery';
import IResponse from '../../utils/models/Response';
import IUser, { UserLoading } from '../../utils/models/User';
import MyLoadingSreen from './MyLoadingSreen';

export default function AppWrapper(props: PropsWithChildren<any>) {
    const { user, setUser } = useContext(StateContext);
    const { loading, error, data } = useMyQuery<IResponse<IUser | undefined>>('auth/user', {} as IResponse<undefined>)

    useEffect(() => {
        //console.log("AppWrapper->", data.response)
        setUser(data.response)
    }, [data])

    // error
    if (error) {
        return <>{
            props.children
        }</>
    }
    // loading
    if (user === UserLoading || loading === true) {
        return (<MyLoadingSreen />);
    }
    //done
    return <>{
        props.children
    }</>
}

