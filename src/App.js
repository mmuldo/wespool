import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import RideDetails from './components/RideDetails'
import Bar from './components/Bar'
import MyRides from './components/MyRides'
import ScheduleRide from './components/ScheduleRide'
import FindRide from './components/FindRide'
import Login from './components/Login'

const barItems = [
  {
    name: 'My Rides',
    path: '/my-rides',
  },
  {
    name: 'Schedule Ride',
    path: '/schedule-ride',
  },
  {
    name: 'Find Ride',
    path: '/find-ride',
  },
  {
    name: 'Logout',
    path: '/',
  },
]

const randomString = (length) => {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  var result = '';
  for ( var i = 0; i < length; i++ ) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}

const App = () => {
  const [rides, setRides] = useState([])
  const rideIDLength = 8
  const [email, setEmail] = useState('')

  useEffect(() => {
    const getRides = async () => {
      const ridesFromBackend = await fetchRides()
      setRides(ridesFromBackend)
    }
    getRides()
  }, [])

  const fetchRides = async () => {
    const res = await fetch('http://localhost:5000/rides')
    const data = await res.json()
    return data
  }

  const fetchRide = async (id) => {
    const res = await fetch(`http://localhost:5000/rides/${id}`)
    const data = await res.json()
    return data
  }

  const login = (email) => {
    setEmail(email)
  }

  const scheduleRide = async (ride) => {
    // var id = '';
    // do {
    //   id = randomString(rideIDLength)
    // } while (rides.filter((r) => (id === r.id)).length);
    // const newRide = {id, ...ride}
    // setRides([...rides, newRide]);
    const res = await fetch('http://localhost:5000/rides', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(ride)
    })
    const data = await res.json()
    setRides([...rides, data])
  }

  const joinRide = async (name, email, id) => {
    const ride = await fetchRide(id)
    if (ride.riders.length >= ride.maxRiders) {
      alert('Ride already full')
      return
    }
    const newRide = {...ride, riders: [{name,email}, ...ride.riders]}

    const res = await fetch(`http://localhost:5000/rides/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newRide)
    })

    const data = await res.json()
    setRides(rides.map((ride) => {
      if (ride.id === id) {
        return {...ride, riders: [...data.riders]}
      } else {
        return ride
      }
    }))
  }

  return (
    <Router>

      <Route
        exact
        path='/'
        render={(props) => (
          <Login title="WesPool" onLogin={login} />
        )}
      />


      <Bar title="WesPool" barItems={barItems} />

      <Route
        exact
        path='/my-rides'
        render={(props) => (
          <MyRides title="My Rides" rides={rides} email={email}/>
        )}
      />
      <Route
        exact
        path='/ride/:id'
        render={({match}) => (
            <RideDetails id={match.params.id} rides={rides} onJoin={joinRide} email={email}/>
        )}
      />
      <Route
        exact
        path='/schedule-ride'
        render={(props) => (
          <ScheduleRide title="Schedule a Ride" onSchedule={scheduleRide} email={email}/>
        )}
      />
      <Route
        exact
        path='/find-ride'
        render={(props) => (
          <FindRide title="Find a Ride" rides={rides}/>
        )}
      />
    </Router>
  )
}

export default App
