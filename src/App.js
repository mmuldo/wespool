import Rides from './components/Rides'

const rides = [
  {
    id: 1,
    organizer: 'Matt',
    date: '10/10',
    time: '10:30',
    from: 'loc',
    to: 'home',
    means: 'car',
    maxRiders: 4,
    riders: ['sally', 'joe', 'mama'],
  },
  {
    id: 2,
    organizer: 'Joe',
    date: '10/11',
    time: '10:30',
    from: 'loc',
    to: 'home',
    means: 'car',
    maxRiders: 5,
    riders: ['sally', 'joe', 'mama'],
  },
]

const App = () => {
  return (
    <div className="container">
      <Rides rides={rides}
      />
    </div>
  )
}

export default App
