import { useState } from 'react'
import { useHistory } from "react-router-dom"
import Header from './Header'

const ScheduleRide = ({title, onSchedule, email}) => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [means, setMeans] = useState('')
    const [maxRiders, setMaxRiders] = useState(0)

    let history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name || !date || !time || !from || !to || !means || !maxRiders){
            alert('Error: required field(s) left empty')
            return
        }

        var riders = [{name,email}]
        var organizer = {name,email}
        onSchedule({organizer, date, time, from, to, means, maxRiders, riders})
        setName('')
        setDate('')
        setTime('')
        setFrom('')
        setTo('')
        setMeans('')
        setMaxRiders(0)
        history.push('/my-rides');
    }

    return (
        <>
        <Header title={title} />
        <div className='container'>
        <form className='add-form' onSubmit={onSubmit}>
          <div className='form-control'>
            <label>Name</label>
            <input type='text'
                   placeholder='Enter Name'
                   value={name}
                   onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label>Date</label>
            <input type='text'
                   placeholder='mm/dd/yyyy'
                   value={date}
                   onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label>Time</label>
            <input type='text'
                   placeholder='hh:mm'
                   value={time}
                   onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label>From</label>
            <input type='text'
                   placeholder='Address'
                   value={from}
                   onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label>To</label>
            <input type='text'
                   placeholder='Address'
                   value={to}
                   onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label>Means</label>
            <input type='text'
                   placeholder='Car/Uber/Lyft/etc.'
                   value={means}
                   onChange={(e) => setMeans(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label>Max Riders (including you)</label>
            <input type='number'
                   placeholder='Number'
                   value={maxRiders}
                   onChange={(e) => setMaxRiders(e.target.value)}
            />
          </div>
          <input type='submit' value='Schedule' className='btn btn-block'/>
        </form>
        </div>
        </>
    )
}

export default ScheduleRide
