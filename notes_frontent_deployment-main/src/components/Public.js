import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
const Public = () => {
    const content = (
        <section className="public">
            <header>
                <div class="logo">
                    <img src={logo} alt="logo" width="24px" />
                    <h4>EasyNotes</h4>
                </div>
               
            </header>
            <main className="public__main">
                <div class="title">Welcome to <br></br>
                    <h1 className="nowrap">EasyNotes</h1></div>
                <p>
                    EasyNotes is a user-friendly and intuitive note-taking application designed <br></br>to help you capture and
                    organize your thoughts, ideas and reminders effortlessly. <br></br>
                </p>
                <br /> </main>
            <footer>
                <Link to="/login">
                    <div className='login_'>Login</div></Link>
            </footer>
        </section>

    )
    return content
}
export default Public