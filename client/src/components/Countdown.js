import React, { useState, useEffect } from "react";

const targetDate = new Date("1 January, 2025 00:00:00").getTime();

const calculateTimeLeft = () => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  } else {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
};

const CountDown = () => {
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
          <TimeBox label="Ngày" value={timeLeft.days} />
          <TimeBox label="Giờ" value={timeLeft.hours} />
          <TimeBox label="Phút" value={timeLeft.minutes} />
          <TimeBox label="Giây" value={timeLeft.seconds} />
        </div>
      </div>
    </div>
  );
};

const TimeBox = React.memo(({ label, value }) => {
  return (
    <div className="time-box">
      <span>{value}</span>
      <p>{label}</p>
    </div>
  );
});

export default CountDown;
