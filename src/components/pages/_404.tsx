import { useNavigate } from 'react-router-dom'
import URL from '../../utils/constant/URL'
import Button from '../layout/form/Button'

export default function _404() {
    const nav = useNavigate()

    return (
        <div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
            <p>404 -Page Not Found 😩</p>
            <Button fullWidth={false} onClick={() => {
                nav(URL.HOME)
            }}>Go Back</Button>
        </div>
    )
}
