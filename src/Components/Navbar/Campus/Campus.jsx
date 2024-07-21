import React from 'react'
import './Campus.css'
import gallery_12 from '../../../assets/gallery-12.png'
import gallery_13 from '../../../assets/gallery-13.png'
import gallery_14 from '../../../assets/gallery-14.png'
import gallery_15 from '../../../assets/gallery-15.png'
import white_arrow from '../../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus' id="campus">
       <div className='gallery'>
        <img src={gallery_12} alt='' />
        <img src={gallery_13} alt='' />
        <img src={gallery_14} alt='' />
        <img src={gallery_15} alt='' />
      </div>

    </div>
  )
}

export default Campus
