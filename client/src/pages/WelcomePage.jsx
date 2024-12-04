import { Link } from'react-router';
import Button from '../components/element/Button';

const WelcomePage = () => {
  return (
    <section className='board'>
        <h1>Welcome to DoodleDo</h1>
        <Link to='/profile'><Button message={"Get started"}/></Link>
    </section>
  )
}

export default WelcomePage