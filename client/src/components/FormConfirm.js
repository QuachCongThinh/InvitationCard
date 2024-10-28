import { Link } from "react-router-dom";
import { MdOutlineMarkEmailRead, MdAttachMoney } from "react-icons/md";
import React, { useState, useRef, useEffect } from "react";
import HappyWedding from "./HappyWedding";

const FormConfirm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const btnContainerRef = useRef(null);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (btnContainerRef.current) {
      observer.observe(btnContainerRef.current);
    }

    return () => {
      if (btnContainerRef.current) {
        observer.unobserve(btnContainerRef.current);
      }
    };
  }, []);

  return (
    <div ref={btnContainerRef} className="btn-custom">
      <div className="btn-confirm">
        <Link to="/confirm">
          <button className="confirm-btn">
            <MdOutlineMarkEmailRead />
            Xác nhận tham dự
          </button>
        </Link>
      </div>
      <div className="btn-happy">
        <button className="confirm-btn" onClick={handleShowPopup}>
          <MdAttachMoney />
          Mừng cưới
        </button>
      </div>
      {showPopup && <HappyWedding onClose={handleClosePopup} />}
    </div>
  );
};

export default FormConfirm;
