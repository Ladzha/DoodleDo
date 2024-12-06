import { Link } from'react-router';
import Button from '../components/element/Button';

const WelcomePage = () => {
  return (
    <section className='board'>
      <div className='welcomeContainer'>
        <h1 className='welcomeTitle'>Welcome to DoodleDo</h1>
        <p className='welcomeSubTitle'><strong>Stay organized and take control of your day! </strong></p>
        <p className='welcomeText'> Whether it's personal tasks, work projects, or long-term goals, this is your space to plan and achieve.</p>
        <div className='welcomeText'>
          <ul>
            <li>
              <strong>Add Tasks:</strong> Easily create to-do items and never forget anything important.
            </li>
            <li>
            <strong>Stay on Track:</strong> Prioritize your tasks and focus on what matters most.
            </li>
            <li>
            <strong>Celebrate Progress:</strong> Mark items as complete and see your accomplishments grow!
            </li>
          </ul>
        </div>
        <p className='welcomeText'>Let's turn your plans into action 🚀!</p>
        <Link to='/register'><Button message={"Get started"}/></Link>
      </div>
    </section>
  )
}

export default WelcomePage