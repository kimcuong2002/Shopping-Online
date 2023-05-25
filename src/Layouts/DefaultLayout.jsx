import React from 'react'
import DefaultHeader from './DefaultHeader'

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <DefaultHeader />
      {children}
    </div>
  )
}

export default DefaultLayout
