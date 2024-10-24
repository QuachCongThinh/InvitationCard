import { Link } from "react-router-dom";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import React, { useState } from "react";
import HappyWedding from "./HappyWedding";

const FormConfirm = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="btn-custom">
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
