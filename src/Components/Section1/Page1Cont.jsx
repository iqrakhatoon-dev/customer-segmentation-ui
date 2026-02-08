import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Cont = (props) => {
  return (
    <div className='flex  items-center gap-4 px-16 py-4 h-[83vh]'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Cont
