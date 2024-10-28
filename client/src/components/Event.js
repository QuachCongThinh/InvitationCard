import React, { useEffect, useRef } from "react";

const Event = () => {
  const eventMaleRef = useRef(null);
  const eventFemaleRef = useRef(null);

  const handleMapClick = (latitude, longitude) => {
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(mapUrl, "_blank");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (eventMaleRef.current) observer.observe(eventMaleRef.current);
    if (eventFemaleRef.current) observer.observe(eventFemaleRef.current);

    return () => {
      if (eventMaleRef.current) observer.unobserve(eventMaleRef.current);
      if (eventFemaleRef.current) observer.unobserve(eventFemaleRef.current);
    };
  }, []);

  return (
    <div id="event-section" className="event">
      <h1>Sự kiện cưới</h1>
      <p>
        Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm cho
        chuyến đi đáng giá.
      </p>
      <div className="event-wedding">
        <div className="event-male" ref={eventMaleRef}>
          <div className="thumb-male"></div>
          <h1>Tiệc cưới nhà Nam</h1>
          <p>15:00 01/01/2025</p>
          <h2>Cái Nước</h2>
          <button onClick={() => handleMapClick(8.937824, 105.016566)}>
            Xem bản đồ
          </button>
        </div>
        <div className="event-female" ref={eventFemaleRef}>
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
