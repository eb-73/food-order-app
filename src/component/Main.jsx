import React from "react";
import "../css/Main.css";
const Main = () => {
  return (
    <div className="main">
      <div className="pic-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2b2b2b"
            fill-opacity="1"
            d="M0,224L80,229.3C160,235,320,245,480,234.7C640,224,800,192,960,186.7C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="about-foods">
        <h1>Delicious Fodd, Delivered To You</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec.
        </p>
      </div>
    </div>
  );
};

export default Main;
