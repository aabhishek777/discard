import React from 'react'

const Header = () => {
  return (
    <header>
    <div className="logo">
      <img src="discord_logo.png" alt="Discord Logo"/>
    </div>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Chat</a></li>
        <li><a href="#">Servers</a></li>
        <li><a href="#">Friends</a></li>
      </ul>
    </nav>
  </header>
  
  )
}

export default Header