import { useState } from 'react'
import { useHistory } from "react-router-dom"

const RideDetails = ( {id, rides, onJoin, email} ) => {
    const [name, setName] = useState('')
    let history = useHistory()

    const filteredRides = rides.filter((r) => (r.id.toString() === id.toString()))
    var ride = null
    if (filteredRides.length) {
        ride = filteredRides[0]
    } else {
        return null
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name){
            alert('Error: required field(s) left empty')
            return
        }

        onJoin(name, email, ride.id)
        setName('')
        history.push('/my-rides');
    }

    return (
        <>
          <div className='container'>
            <p>
              Organizer: {ride.organizer.name}
            </p>
            <p>
              From: {ride.from}
            </p>
            <p>
              To: {ride.to}
            </p>
            <p>
              Date: {ride.date}
            </p>
            <p>
              Time: {ride.time}
            </p>
            <p>
              Means: {ride.means}
            </p>
            <p>
              Other Riders: {ride.riders.filter((rider) => (rider.email !== ride.organizer.email)).map((rider) => rider.name).join(", ")}
            </p>
            <p>
              Spots Available: {ride.maxRiders - ride.riders.length}
            </p>
          </div>
          <div className='container'>
            <form className='add-form' onSubmit={onSubmit}>
              <div className='form-control'>
                <label>Name</label>
                <input type='text'
                       placeholder='Enter Name'
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                />
                <input type='submit' value='Join' className='btn btn-block'/>
              </div>
            </form>
          </div>
        </>
    )
}

export default RideDetails
