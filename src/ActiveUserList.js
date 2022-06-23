import React from 'react'

const ActiveUserList = ({ user, active, setActive }) => {

  ////title array p
  const activeUser = [
    ` ${user.name.first} ${user.name.last}`,
    ` ${user.email}`,
    ` ${user.dob.date.slice(0, 10)} `,
    ` ${user.location.country} `,
    ` ${user.phone} `,
    ` ${user.login.password} `
  ]

  //title array span
  const activeText = [
    "Hi, My name is",
    "My email address is",
    "My birthday is",
    "My address is",
    "My phone number is",
    "My password is"
  ]

  return (
    <>
      <span>{activeText[active]}</span>
      <p>{activeUser[active]}</p>
    </>
  )
}

export default ActiveUserList