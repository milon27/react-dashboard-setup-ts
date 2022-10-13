import LineCard from '../../layout/common/LineCard'
import Spacer from '../../layout/Spacer'
import MyPageWrapper from '../MyPageWrapper'

export default function Home() {

    return (
        <MyPageWrapper>
            <LineCard>
                <h1 className='font-semibold'>Dashboard</h1>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-2'>

                </div>
            </LineCard>
            <Spacer px={20} />

        </MyPageWrapper>
    )
}
