import React from 'react'

const HeaderNavbarItem = ({ name, options, icon2 }) => {
  return (
    <div className="group uppercase relative text-[15px]">
      <div className="flex gap-[30px] ">
        <span className="cursor-pointer text-[20px] ">{name}</span>
      </div>
      {options && (
        <ul className="hidden group-hover:block absolute left-0 text-left">
          {options.map((item, key) => {
            return (
              <li key={key} className="my-[10px]">
                <a href="/#">{item}</a>
              </li>
            )
          })}
        </ul>
      )}
      <div>{icon2}</div>
    </div>
  )
}

export default HeaderNavbarItem
