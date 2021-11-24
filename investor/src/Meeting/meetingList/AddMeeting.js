import React from 'react'

import { useState } from 'react'

const AddMeeting = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [image, setImage] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('Please add meeting')
            return
        }
        onAdd({text, day, image})
        setText('')
        setDay('')
        setImage('')
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Topic</label>
                <input type='text' placeholder='Add meeting topic' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' placeholder='Add day and time for the meeting' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Image for advertising</label>
                <input type='text' placeholder='Add image source' value={image} onChange={(e) => setImage(e.target.value)}/>
            </div>

            <input type='submit' value='Add Meeting' className='btn' />
        </form>
    )
}

export default AddMeeting
