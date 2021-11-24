import { FaTimes } from 'react-icons/fa'
import React from 'react'
import './meeting.css';

const Meeting = ({ meeting, onDelete }) => {
    return (
        <div className='task'>
            <img src={meeting.image} alt='More...'
                        className='cards_item_img'/>
            <h3>{meeting.text} <FaTimes style={{color:'red', cursor:'pointer' }} onClick={() => onDelete(meeting.id)}/></h3>
            <p>{meeting.time}</p>
            
        </div>
    )
}
export default Meeting