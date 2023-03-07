import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div>
          <span>get connected with us</span>
        </div>
        <div className="footer">
          <div>
            <h6>About Us</h6>
            <p>Here you can use rows</p>
            <p>you can watch it for free</p>
          </div>
          <div>
            <h6>Product</h6>
            <p>frofitable</p>
          </div>
          <div>
            <h6>Useful Links</h6>
            <p>settings</p>
          </div>

          <div className="contact">
            <h6>Contacts</h6>
            <img
              width={30}
              src="https://i.pinimg.com/originals/26/36/6c/26366c0a4d006919abf85a21dcdc9fd8.jpg"
              alt=""
            />
            <p>890-900-800-6789</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
