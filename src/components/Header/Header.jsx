import React from "react";
import "../Header/Header.css";
import logo1 from "../../assets/images/logo1.png";
import negrgirl from "../../assets/images/negr-girl.png";

function Header() {
  return (
    <div>
      <header>
        <nav className="fixed-nav">
          <img src={logo1} alt="" />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <button>Login</button>
            </li>
            <li>
              <button className="sign">Sign Up</button>
            </li>
          </ul>
        </nav>
        <nav>
          <div className="text">
            <h1>    
              <span>Studying</span> Online is now much easier
            </h1>
            <p>
              Skilline is an interesting platform that will teach you in more an
              interactive way
            </p>
            <div className="vatch">
              <button>Join for free</button>

              <button>
                <a
                  target="_blank"
                  href="https://youtu.be/Yn9HZHVOsog?list=RDYn9HZHVOsog"
                >
                  <i class="fa-solid fa-play"></i>
                </a>
              </button>
              <p>Watch how it works</p>
            </div>
          </div>
          <img src={negrgirl} alt="" />
        </nav>
      </header>
    </div>
  );
}

export default Header;
