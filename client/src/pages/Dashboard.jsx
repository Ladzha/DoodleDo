import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DashboardMain from '../components/DashboardMain'
import MainMenu from '../components/MainMenu'

const Dashboard = () => {
  return (
    <>
        <Header/>
        <MainMenu/>
        <DashboardMain/>
        <Footer/>
    </>
  )
}

export default Dashboard