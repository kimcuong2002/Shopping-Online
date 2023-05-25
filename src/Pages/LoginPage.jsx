import React from 'react'
import DefaultLayout from '../Layouts/DefaultLayout'
import Input from '../Components/Input'
import Button from '../Components/Button'
import { FaFacebookF } from 'react-icons/fa'
import { TfiGoogle } from 'react-icons/tfi'

const LoginPage = () => {
  return (
    <DefaultLayout>
      <center className="drop-shadow-lg">
        <div className="w-[35%] mt-[100px] border-2 p-[30px] rounded-[30px]">
          <p className="text-[30px] font-bold">Login Now</p>
          <Input name="Name" type="text" className="my-[40px]" />
          <Input name="Password" type="password" />
          <div className="flex justify-between items-center mt-[20px]">
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" />
              <h3>Remember me?</h3>
            </div>
            <h3>Forgot password?</h3>
          </div>
          <Button name="Login" />
          <div className="relative my-[30px]">
            <hr />
            <p className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-white px-[10px] drop-shadow-[0] ">
              or
            </p>
          </div>
          <div className="flex">
            <Button name="Facebook" icon={<FaFacebookF />} />
            <Button name="Google" icon={<TfiGoogle />} />
          </div>
        </div>
      </center>
    </DefaultLayout>
  )
}

export default LoginPage
