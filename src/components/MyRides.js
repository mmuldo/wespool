import Rides from './Rides'
import Header from './Header'

const MyRides = ({title, rides, email}) => {
    return (
        <>
      <Header title={title} />
      <div className="container">
        <Rides rides={rides.filter((ride) => ride.riders.map((rider) => rider.email).includes(email))} />
      </div>
        </>
    )
}

export default MyRides
