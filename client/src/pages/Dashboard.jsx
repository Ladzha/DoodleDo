import {useState, useEffect, useCallback} from 'react'
import useFetch from '../hooks/useFetch.js'
import Button from '../components/element/Button.jsx'
import TaskBlock from '../components/tasks/TaskBlock.jsx'
import ProjectBlock from '../components/projects/ProjectBlock.jsx'
import primer from '../api/defaultData.js'

const Dashboard = ({}) => {

  const { data, loading, error } = useFetch("categories")  

  return (
    <section className='board'>
      <h2>What to do</h2>
      <TaskBlock primer={primer} loading={loading} error={error}/>
      <ProjectBlock  primer={primer} loading={loading} error={error}/>
    </section>
  )
}

export default Dashboard