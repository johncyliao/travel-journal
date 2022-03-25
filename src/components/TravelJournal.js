import React from 'react'
import { FaGlobeAsia, FaFacebook, FaInstagram } from 'react-icons/fa';
import data from './data'
import Preview from './Preview'


const TravelJournal = () => {
    const preview = data.map(item => <Preview key={item.id} {...item}/>)

  return (
    <div>
        <nav>
            <div className="nav-left">
              <p><FaGlobeAsia />John's Travel Journal</p>
            </div>
            <div className="nav-right">
              <FaFacebook className='nav-right-icon' />
              <FaInstagram  className='nav-right-icon'/>
            </div>
            
        </nav>
        {preview}
    </div>
  )
}

export default TravelJournal