import React from 'react'
import { headerButtonDatas } from '../utils'
import HeaderNavbarItem from './HeaderNavBarItem'

const HeaderNavbar = () => {
  return (
    <div className=" flex gap-[40px]">
      {headerButtonDatas &&
        headerButtonDatas.map((item, index) => {
          return <HeaderNavbarItem key={index} name={item.buttonName} options={item.options} icon2={item.icon2} />
        })}
    </div>
  )
}

export default HeaderNavbar
