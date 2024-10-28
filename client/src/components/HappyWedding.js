import React, { useState, useEffect } from "react";
import "../style/happy.scss";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import QRT from "../assets/image/QR_T.jpg";
import QRTr from "../assets/image/QT_Tr.jpg";

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
              <img src={QRT} alt="QRCode" />
              <div className="card-info">
                <div className="nameCard">
                  <p>Tên:</p>
                  <strong>QUACH CONG THINH</strong>
                </div>
                <div className="numberCard">
                  <p>Số Tài Khoản:</p>
                  <strong>0948073374</strong>
                </div>
                <div className="typeBank">
                  <p>Ngân hàng:</p>
                  <strong>TPBank</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="boxQR">
              <p>Mừng cưới đến cô dâu</p>
              <img src={QRTr} alt="QRCode" />
              <div className="card-info">
                <div className="nameCard">
                  <p>Tên:</p>
                  <strong>QUACH THUY TRAN</strong>
                </div>
                <div className="numberCard">
                  <p>Số tài khoản:</p>
                  <strong>102871881510</strong>
                </div>
                <div className="typeBank">
                  <p>Ngân hàng:</p>
                  <strong>ViettinBank</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyWedding;
