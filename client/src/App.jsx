import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrapper'>
        <Home/>
        <Dashboard/>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </div>
  )
}

export default App
