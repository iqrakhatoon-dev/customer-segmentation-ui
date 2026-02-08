const RightCardContent = (props) => {
  return (
       <div className="top-0 left-0 h-full w-full absolute  p-7 flex flex-col justify-between">
        <h2 className="text-2xl bg-white text-black font-bold h-10 w-10 flex justify-center items-center rounded-full">{props.id+1}</h2>

        <div>
          <p className="text-shadow-2xs text-white bg-transparent text-md font-medium mb-12 text-lg">
           {props.intro}
          </p>
 
          <div className="flex justify-between">
            <button className="flex justify-between bg-blue-800 text-white px-8 rounded-2xl py-1 text-lg font-normal">
              {props.tag}
            </button>
            <button className="flex justify-between bg-blue-800 text-white px-4 rounded-2xl py-1 text-xl font-normal"><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
