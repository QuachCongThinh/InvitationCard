const Event = () => {
  const handleMapClick = (latitude, longitude) => {
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(mapUrl, "_blank");
  };

  return (
    <div id="event-section" className="event">
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
          <button onClick={() => handleMapClick(8.95718, 105.098513)}>
            Xem bản đồ
          </button>
        </div>
      </div>
    </div>
  );
};
export default Event;
