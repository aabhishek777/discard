import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="discord_logo.png" alt="Discord Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Chat</Link>
          </li>
          <li>
            <Link>Servers</Link>
          </li>
          <li>
            <Link>Friends</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
