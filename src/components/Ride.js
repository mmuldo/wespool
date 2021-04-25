const Ride = ({ride}) => {
    return (
        <div className="task">
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
    )
}

export default Ride
