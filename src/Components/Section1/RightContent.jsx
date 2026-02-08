import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props);
  
  return (
    <div id='RightCont' className='h-full w-2/3 rounded-4xl p-7 flex flex-nowrap gap-3 overflow-x-auto'>
       {props.users.map((el, idx) => {
        return  <RightCard key={idx} id={idx} img={el.img} intro={el.intro} tag={el.tag}/>
       })}
    </div>
  )
}

export default RightContent
