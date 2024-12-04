import {useState, useEffect, useCallback} from 'react'
import { Link } from'react-router'
import Button from '../components/element/Button.jsx'

const Dashboard = () => {

  return (
    <section className='board'>
      <h1>Name of section</h1>
      Dashboard here shown category, project or task list
      <Link to='/'><Button message={"Welcome"}/></Link>
    </section>
  )
}

export default Dashboard