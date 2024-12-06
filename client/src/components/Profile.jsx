import { Link } from'react-router';
import Button from './element/Button';

const Profile = () => {

  return (
    <section className='board'>
        <h1>Profile</h1>
        <Link to='/dashboard'><Button message={"To Dashboard"}/></Link>    
    </section>

  )
}

export default Profile