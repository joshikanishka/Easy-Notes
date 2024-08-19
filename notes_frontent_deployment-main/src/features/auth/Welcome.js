import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'

const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()

    useTitle(`EasyNotes: ${username}`)

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Welcome {username}!</h1>
            <div className='welcome_Links'>
            <p><Link to="/dash/notes">View EasyNotes</Link></p>
            </div>
            <div className='welcome_Links'>
            <p><Link to="/dash/notes/new">Add New EasyNote</Link></p>
            </div>
            
            {(isManager || isAdmin) && 
            <div className='welcome_Links'> <p><Link to="/dash/users">View User Settings</Link></p>  </div> }
           
            
            {(isAdmin) && <div className='welcome_Links'><p><Link to="/dash/users/new">Add New User</Link></p>
            </div>}
           
        </section>
    )

    return content
}
export default Welcome