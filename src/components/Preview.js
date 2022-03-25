import React from 'react'
import { GoLocation } from 'react-icons/go';

const Preview = (props) => {
    
  return (
    <div className='preview-box-container'>
        <div className='preview-box'>
            <img src={props.img} alt="" />
            <div className='info-box'>
                <GoLocation style={{color: '#5a5af5'}} />
                <span className='preview-location'>{props.location}</span>
                <h3>{props.title}</h3>
                <strong>{props.startingDate} - {props.endingDate}</strong>
                <p className='preview-text'>{props.text}</p>
            </div>
            <br />
        </div>
    </div>
  )
}

export default Preview