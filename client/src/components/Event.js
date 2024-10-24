import React, { useEffect } from "react";
// import roseLeft from "../assets/image/rose-left.png";
// import roseRight from "../assets/image/rose-right.png";

const Event = () => {
  const handleMapClick = (latitude, longitude) => {
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(mapUrl, "_blank");
  };

  // useEffect(() => {
  //   const roseLeft = document.querySelector(".roseLeft");

  //   const handleScroll = () => {
  //     const rect = roseLeft.getBoundingClientRect();
  //     const isVisibleLeft = rect.top > 100 && rect.bottom >= window.innerHeight;

  //     if (isVisibleLeft) {
  //       roseLeft.classList.add("open");
  //     } else {
  //       roseLeft.classList.remove("open");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const roseRight = document.querySelector(".roseRight");
  //   const handleScroll = () => {
  //     const rectRight = roseRight.getBoundingClientRect();
  //     const isVisibleRight =
  //       rectRight.top < 1100 && rectRight.bottom <= window.innerHeight;

  //     if (isVisibleRight) {
  //       roseRight.classList.add("open");
  //     } else {
  //       roseRight.classList.remove("open");
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div id="event-section" className="event">
      {/* <div className="rose-container">
        <img src={roseLeft} alt="Rose" className="roseLeft" />
        <img src={roseRight} alt="Rose" className="roseRight" />
      </div> */}
      <h1>Sự kiện cưới</h1>
      <p>
        Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm cho
        chuyến đi đáng giá.
      </p>
      <div className="event-wedding">
        <div className="event-male">
          <div className="thumb-male"></div>
          <h1>Tiệc cưới nhà Nam</h1>
          <p>15:00 01/01/2025</p>
          <h2>Cái Nước</h2>
          <button onClick={() => handleMapClick(8.937824, 105.016566)}>
            Xem bản đồ
          </button>
        </div>
        <div className="event-female">
          <div className="thumb-female"></div>
          <h1>Tiệc cưới nhà Nữ</h1>
          <p>15:00 01/01/2025</p>
          <h2>Đông Hưng</h2>
          <button onClick={() => handleMapClick(8.957148, 105.098339)}>
            Xem bản đồ
          </button>
        </div>
      </div>
    </div>
  );
};
export default Event;
