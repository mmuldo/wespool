import { useState } from 'react'
import { useHistory } from "react-router-dom"

const Login = ({title, onLogin}) => {
    const [email, setEmail] = useState('')
    let history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()

        if(!email){
            alert('Error: required field(s) left empty')
            return
        }

        onLogin(email)
        setEmail('')
        history.push('/my-rides');
    }
    return (
        <div className='login'>
          <h1> {title} </h1>
          <div className='container'>
            <form className='add-form' onSubmit={onSubmit}>
              <div className='form-control'>
                <label>Email</label>
                <input type='text'
                       placeholder='username@example.com'
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                />
                <input type='submit' value='Login' className='btn btn-block'/>
              </div>
            </form>
          </div>
        </div>
    )
}

export default Login
