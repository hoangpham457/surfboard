import React from 'react';
import './meeting.css';
import Meetings from './Meetings';
import AddMeeting from './AddMeeting';
import { useState } from "react";



const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }
    const [meetings, setMeetings] = useState([
        {
            id: 1,
            text: 'Value Proposition',
            time: 'Time: November 24th, 2021 from 8:00am to 9:00am',
            image: 'image/meeting1.jpg'
        },
        {
            id: 2,
            text: 'Education',
            time: 'Time: November 24th, 2021 from 10:00am to 11:00am',
            image: 'image/meeting1.jpg'
        },
        {
            id: 3,
            text: 'Operation',
            time: 'Time: November 24th, 2021 from 11:00am to 1:00pm',
            image: 'image/meeting1.jpg'
        },
        {
            id: 4,
            text: 'Transaction',
            time: 'Time: November 24th, 2021 from 11:00am to 1:00pm',
            image: 'image/meeting1.jpg'
        },
        {
            id: 5,
            text: 'Value Proposition',
            time: 'Time: November 24th, 2021 from 8:00am to 9:00am',
            image: 'image/meeting1.jpg'
        },
        {
            id: 6,
            text: 'Education',
            time: 'Time: November 24th, 2021 from 10:00am to 11:00am',
            image: 'image/meeting1.jpg'
        },
        {
            id: 7,
            text: 'Operation',
            time: 'Time: November 24th, 2021 from 11:00am to 1:00pm',
            image: 'image/meeting1.jpg'
        },
        {
            id: 8,
            text: 'Transaction',
            time: 'Time: November 24th, 2021 from 11:00am to 1:00pm',
            image: 'image/meeting1.jpg'
        },
    ])

    
    
      const deleteMeeting = (id) => {
        setMeetings(meetings.filter((meeting) =>meeting.id !== id))
      }
      const addMeeting = (meeting) => {
          console.log(meeting)
      }

    return (
        <div>
            <header className='container'>
                <h1>{title}</h1>
                <AddMeeting onAdd={addMeeting}/>
                
                <Meetings meetings={meetings} onDelete={deleteMeeting} />
           
           
            </header>
            
        </div>
        
    );
}



export default Header;