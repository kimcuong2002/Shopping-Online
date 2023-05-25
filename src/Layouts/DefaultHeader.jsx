import america from '../assets/america.png'
import Button from '../Components/Button'
import logo from '../assets/logo.png'
import HeaderNavbar from '../Components/HeaderNavBar'
import React, { useState } from 'react'
import { BsPhone, BsSearch } from 'react-icons/bs'
import { IoIosRepeat } from 'react-icons/io'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { RxAvatar } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const DefaultHeader = () => {
  const [seleactedLanguage, setSelectedLanguage] = useState('')

  return (
    <center>
      <div className="w-[60%] pt-[25px] ">
        <div className="flex justify-between items-center mb-[25px] text-[17px]">
          <div className="flex gap-[20px]">
            <div className="flex justify-center items-center gap-[10px]">
              {seleactedLanguage ? (
                <img
                  src={`/src/assets/${seleactedLanguage}.png`}
                  alt=""
                  className="h-[20px] w-[20px] rounded-full object-cover"
                />
              ) : (
                <img src={america} alt="" className="h-[20px] w-[20px] rounded-full object-cover" />
              )}
              <select
                name=""
                id=""
                value={seleactedLanguage}
                onChange={e => {
                  setSelectedLanguage(e.target.value)
                }}
                className="outline-0 border-0 bg-white text-[17px]"
              >
                <option value="america">English</option>
                <option value="chaina">Chainese</option>
                <option value="vietnam">Vietnamese</option>
              </select>
            </div>
            <select name="" id="" className="outline-0 border-0 bg-white">
              <option value="">USD</option>
              <option value="">VND</option>
              <option value="">EUR</option>
            </select>
            <div className="flex justify-center items-center gap-[5px] text-[17px]">
              <BsPhone />
              <p>032-884-4771</p>
            </div>
          </div>
          <div className="flex gap-[20px] text-[17px]">
            <Button icon={<IoIosRepeat />} name="Compare" />
            <Button icon={<AiOutlineHeart />} name="Wishlish" />
            <Link to="login/">
              <Button icon={<RxAvatar />} name="Login" />
            </Link>
          </div>
        </div>
        <hr />
        <div className="mt-[25px] flex justify-between ">
          <img src={logo} alt="" className="w-[200px] cursor-pointer max-h-[50px]" />
          <HeaderNavbar />
          <div className="flex gap-[20px] text-[25px] ">
            <BsSearch className="cursor-pointer" />
            <AiOutlineShoppingCart className="cursor-pointer" />
          </div>
        </div>
      </div>
    </center>
  )
}

export default DefaultHeader
