import { Link } from 'react-router-dom'

const Ride = ({ride}) => {
    return (
        <Link to={`/ride/${ride.id}`} className="link">
        <div className="container">
          <h3>
            {ride.from} to {ride.to} on {ride.date} @ {ride.time}
          </h3>
          <p>
            By {ride.means}
          </p>
          <p>
            {ride.riders.length}/{ride.maxRiders} spots taken
          </p>
        </div>
        </Link>
    )
}

export default Ride
