import { useNavigate } from 'react-router-dom'
import URL from '../../utils/constant/URL'
import Button from '../layout/form/Button'

export default function _404() {
    const nav = useNavigate()

    return (
        <div className='w-full h-screen grid place-items-center'>
            <p>404 - Not Found 😩</p>
            <Button onClick={() => {
                nav(URL.HOME)
            }}>Go Back</Button>
        </div>
    )
}
