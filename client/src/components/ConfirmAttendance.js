import React, { useState, useEffect } from "react";
import "../style/confirm.scss";
import avt from "../assets/avatar-vo-tri-meo-2.jpg";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Confirm = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Vui lòng nhập tên của bạn.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      const result = await response.json();

      if (result.guest) {
        setIsConfirmed(true);
        toast.success("Xác nhận tham dự thành công!");
      } else {
        toast.error("Có lỗi xảy ra. Vui lòng thử lại.");
      }
    } catch (error) {
      toast.error("Thông tin khách mời đã có sẵn.");
    }
  };
  useEffect(() => {
    if (isConfirmed) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isConfirmed, navigate]);

  return (
    <>
      <div className="titleForm">
        <div className="avatar">
          <img src={avt} alt="avatar" />
        </div>
        <div className="text">
          <p className="textConfirm">Xác nhận tham dự</p>
          <p>Đám cưới của</p>
          <div className="name">
            <span>Anh A</span>
            <FaHeart />
            <FaHeart />
            <span>Chị B</span>
          </div>
        </div>
      </div>
      <div className="form">
        <h2>Nhập Tên</h2>
        <h4>Type your Name</h4>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              placeholder="--- Nhập tên vào đây ---"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <button type="submit">Xác nhận</button>
        </form>
        <div className="link">
          <Link to="/">Quay về trang chủ</Link>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Confirm;
