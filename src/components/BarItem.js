import { Link } from 'react-router-dom'

const BarItem = ( {barItem} ) => {
    return (
        <Link to={barItem.path} className='link'>{barItem.name}</Link>
    )
}

export default BarItem
