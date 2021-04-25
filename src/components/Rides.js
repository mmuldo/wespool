import Ride from './Ride'

const Rides = ({rides}) => {
    return (
        <div>
        {
            rides.map((ride, index) => (
                <Ride key={index} ride={ride}/>
            ))
        }
        </div>
    )
}

export default Rides
