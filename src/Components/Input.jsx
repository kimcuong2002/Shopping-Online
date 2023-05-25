import React from 'react'

const Input = ({ type, name, className }) => {
  return (
    <div className={`${className} relative width-[200px]`}>
      <input
        type="type"
        className="py-[10px] w-full text-2xl border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:tex-red-[500] transition duration-200"
      />
      <label
        htmlFor=""
        className="text-gray-400 input-text text-2xl text-opacity-80 absolute left-0 top-[50%] translate-y-[-50%] mx-6 px-2 transition duration-200"
      >
        {name}
      </label>
    </div>
  )
}

export default Input
