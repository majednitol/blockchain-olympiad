
import React, { useContext } from 'react'
import { ChatAppContext, HealthContext } from '@/context/Health'



const index = () => {
  const { account } = useContext(HealthContext)
  return (
    <div>
      {account}
    </div>
  )
}

export default index