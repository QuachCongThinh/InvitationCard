import React, { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import video from "../assets/image/5924219855622.mp4";
import { CiPlay1 } from "react-icons/ci";
import "react-responsive-modal/styles.css";

const Video = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

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

  return (
    <div className="video">
      <div className="text">
        <h1>Xem video cưới của chúng tôi</h1>
        <p>
          Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm
          cho chuyến đi đáng giá.
        </p>
        <button className="play-button" onClick={openModal}>
          <CiPlay1 />
        </button>
      </div>

      <Modal
        open={open}
        onClose={closeModal}
        center
        styles={{
          modal: {
            maxWidth: "100%",
            width: "68.8%",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          },
          closeButton: {
            color: "black",
            backgroundColor: "white",
            border: "none",
            marginRight: "15px",
            marginTop: "10px",
          },
        }}
      >
        <div
          className="modal-content"
          style={{
            width: isFullScreen ? "100vw" : "auto",
            height: isFullScreen ? "100vh" : "auto",
          }}
        >
          <video
            controls
            autoPlay
            style={{
              width: isFullScreen ? "100%" : "100%",
              height: isFullScreen ? "100%" : "auto",
            }}
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </Modal>
    </div>
  );
};

export default Video;
