import React from 'react'
import bnr from "../Images/bnr.jpg"
import ponni from "../Images/ponni.png"
const Bennar = () => {
  return (
    <div>
        <div className='mt-20 w-full min-h-[60vh] flex items-center justify-center'>
            <div className='relative bg-red-800'>
                <img src={bnr} alt="" />
                <div className="absolute  -top-5 left-40 flex" >
                <img src={ponni} className='w-100' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bennar