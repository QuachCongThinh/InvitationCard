import React, { useState, useEffect, useRef } from "react";
import video from "../assets/image/5924219855622.mp4";
import { CiPlay1 } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import "../style/style.scss";

const Video = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const popupRef = useRef(null);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 425) {
        setIsFullScreen(true);
      } else {
        setIsFullScreen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };

    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  return (
    <div className="video">
      <div className="text">
        <h1>Xem video cưới của chúng tôi</h1>
        <p>
          Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm
          cho chuyến đi đáng giá.
        </p>
        <button className="play-button" onClick={openPopup}>
          <CiPlay1 />
        </button>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div
            className="popup-content"
            ref={popupRef}
            style={{
              width: isFullScreen ? "100vw" : "70%",
            }}
          >
            <button className="close-button" onClick={closePopup}>
              <AiOutlineClose />
            </button>
            <video controls autoPlay>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
