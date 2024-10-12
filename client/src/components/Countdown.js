import React, { useState, useEffect } from "react";

const CountDown = () => {
  const targetDate = new Date("1 January, 2025 00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countDown">
      <div className="overlay-countdown"></div>
      <div className="background">
        <div className="top">
          <h1>Ngày quan trọng của tụi mình</h1>
          <span>1 January 2025</span>
          <p>
            Chúng tôi rất vui mừng được kỷ niệm ngày đặc biệt của mình với gia
            đình và bạn bè. Cảm ơn bạn rất nhiều vì đã ghé thăm trang web đám
            cưới của chúng tôi!
          </p>
        </div>
        <div className="countdown-timer">
          <div className="time-box">
            <span>{timeLeft.days}</span>
            <p>Ngày</p>
          </div>
          <div className="time-box">
            <span>{timeLeft.hours}</span>
            <p>Giờ</p>
          </div>
          <div className="time-box">
            <span>{timeLeft.minutes}</span>
            <p>Phút</p>
          </div>
          <div className="time-box">
            <span>{timeLeft.seconds}</span>
            <p>Giây</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountDown;
