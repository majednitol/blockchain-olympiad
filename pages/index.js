
import React, { useContext } from 'react'
import { ChatAppContext, HealthContext } from '@/context/Health'
import MainComponent from './Components/DashBoard/MainComponent'



const index = () => {
  const { account } = useContext(HealthContext)
  return (
    <div>
      <MainComponent />
    </div>
  )
}

export default index