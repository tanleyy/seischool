import React from 'react'
import './Programs.css'
import program_12 from '../../../assets/program-12.png'
import program_13 from '../../../assets/program-13.png'
import program_14 from '../../../assets/program-14.png'
import program_icon_12 from '../../../assets/program-icon-12.png'
import program_icon_13 from '../../../assets/program-icon-13.png'
import program_icon_14 from '../../../assets/program-icon-14.png'


const Programs = () => {
  return (
    <div className='programs' id="program">
     <div className="program">
        <img src={program_12} alt='' />
        <div className="caption">
            <img src={program_icon_12} alt="" />
            <p>Christmas Party</p>
        </div>
     </div>

     <div className="program">
        <img src={program_13} alt='' />
        <div className="caption">
            <img src={program_icon_13} alt="" />
            
            <p>School Event</p>
        </div>
     </div>

     <div className="program">
        <img src={program_14} alt='' />
        <div className="caption">
            <img src={program_icon_14} alt="" />
            <p>Field Trip</p>
        </div>
     </div>
    </div>

  )
}

export default Programs
