import React from 'react'

const Statistics = ({statistics}) => {
   

  return (
    <div className='bg-white h-full mt-4 '>
        <div className='flex flex-row justify-around items-center '>
            {statistics.map((stat)=>{
                return(
                    <div key={stat.name} className='flex flex-row '>
                        <div className='flex flex-row shadow justify-center items-center gap-4 '>
                        <div className=' bg-white shadpw-lg hover:bg-gray-50 cursor-pointer px-16 py-8'>
                            <div className='flex flex-row justify-center items-center gap-4'>
                            <img src={stat.icon}  className='w-8 h-8 rounded-full' alt="" />
                            <span>{stat.name}</span> 
                            </div>
                            <div className='flex flex-row justify-center items-center gap-4 mt-4'>
                            <h1 className='text-2xl font-bold'>{stat.number}</h1>
                            <p className='bg-green-200 rounded text-[12px] text-green-700'>{stat.change}</p>
                            </div>   
                        </div>
                       
                        </div>
                    </div>



                )
            })}



        </div>

    </div>
  )
}

export default Statistics
