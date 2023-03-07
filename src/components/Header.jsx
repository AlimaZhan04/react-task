import React from "react";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="navbar">
          <span className="span">Navbar</span>

          <form className="form" role={"search"}>
            <input type="search" placeholder="search" />
            <button>search</button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
