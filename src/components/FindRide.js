import Rides from './Rides'
import Header from './Header'

const FindRide = ({title, rides}) => {
    return (
        <>
      <Header title={title} />
      <div className="container">
        <Rides rides={rides}
        />
      </div>
        </>
    )
}

export default FindRide
