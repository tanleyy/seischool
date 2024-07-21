import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../../assets/next-icon.png'
import back_icon from '../../../assets/back-icon.png'
import user_12 from '../../../assets/user-12.png'
import user_13 from '../../../assets/user-13.png'
import user_14 from '../../../assets/user-14.png'
import user_15 from '../../../assets/user-15.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=> {
    if(tx > -50){
        tx -=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

}
const slideBackward = ()=> {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

}

  return (
    <div className='testimonials' id="testimonials">
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_12} alt='' />
                            <div>
                                <h3>Stanley Sarreal</h3>
                                <span>SEI, PH</span>
                            </div>
                        </div>
                        <p>Deciding to pursue my education at SEI was one of the best 
                           choices I’ve ever made. The welcoming community, 
                           cutting-edge facilities, and dedication to academic 
                           excellence have surpassed my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_13} alt='' />
                            <div>
                                <h3>John Dave Surigao</h3>
                                <span>SEI, PH</span>
                            </div>
                        </div>
                        <p>Attending SEI was a decision I’m incredibly proud of. 
                           The inclusive community, modern facilities, and unwavering 
                           commitment to academic excellence have greatly impressed me.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_14} alt='' />
                            <div>
                                <h3>Jovan Taguinod</h3>
                                <span>SEI, PH</span>
                            </div>
                        </div>
                        <p>Choosing SEI was one of the smartest moves I’ve made. 
                           The friendly community, advanced facilities, and focus on 
                           academic excellence have gone above and beyond my 
                           expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_15} alt='' />
                            <div>
                                <h3>Kirby Torres</h3>
                                <span>SEI, PH</span>
                            </div>
                        </div>
                        <p>Opting to study at SEI was a fantastic choice. The supportive
                           community, state-of-the-art facilities, and strong emphasis 
                           on academic excellence have far exceeded my expectations.</p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
