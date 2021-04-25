import { useLocation } from 'react-router-dom'
import BarItem from './BarItem'

const Bar = ({ title, barItems }) => {
    const location = useLocation()
    if (location.pathname === '/') {
        return null
    }
    return (
        <>
          <div className="bar">
            <div className="logo">
              <h2>{title}</h2>
            </div>
          <div className="menu">
            <ul>
              {
                  barItems.map((barItem, index) => (
                      <li key={index}>
                        <BarItem key={index} barItem={barItem}/>
                      </li>
                  ))
              }
            </ul>
          </div>
          </div>
        </>
    )
}

export default Bar
