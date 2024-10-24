import React, { useState, useEffect } from "react";
import "../style/happy.scss";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
const HappyWedding = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 10);
  }, []);

  return (
    <div className="box">
      <div className="overlay" onClick={onClose}></div>
      <div className={`box-content ${isVisible ? "show" : ""}`}>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <div className="box-top">
          <h2>
            <RiMoneyDollarCircleLine />
            Hộp mừng cưới
          </h2>
        </div>
        <div className="box-bottom">
          <div className="left">
            <div className="boxQR">
              <p>Mừng cưới đến chú rễ</p>
            </div>
          </div>
          <div className="right">
            <div className="boxQR">
              <p>Mừng cưới đến cô dâu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyWedding;
