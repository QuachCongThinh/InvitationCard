import React, { useState, useEffect, useRef } from "react";

const targetDate = new Date("29 January, 2025 00:00:00").getTime();

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
  const timeBoxesRef = useRef([]);
  const titleRef = useRef(null);
  const dateRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
      { threshold: 0.5 }
    );

    [
      titleRef.current,
      dateRef.current,
      descriptionRef.current,
      ...timeBoxesRef.current,
    ].forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      [
        titleRef.current,
        dateRef.current,
        descriptionRef.current,
        ...timeBoxesRef.current,
      ].forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="countDown">
      <div className="overlay-countdown"></div>
      <div className="background">
        <div className="top">
          <h1 ref={titleRef}>Ngày quan trọng của tụi mình</h1>
          <span ref={dateRef}>29 January 2025</span>
          <p ref={descriptionRef}>
            Chúng tôi rất vui mừng được kỷ niệm ngày đặc biệt của mình với gia
            đình và bạn bè. Cảm ơn bạn rất nhiều vì đã ghé thăm trang web đám
            cưới của chúng tôi!
          </p>
        </div>
        <div className="countdown-timer">
          <TimeBox
            ref={(el) => (timeBoxesRef.current[0] = el)}
            label="Ngày"
            value={timeLeft.days}
          />
          <TimeBox
            ref={(el) => (timeBoxesRef.current[1] = el)}
            label="Giờ"
            value={timeLeft.hours}
          />
          <TimeBox
            ref={(el) => (timeBoxesRef.current[2] = el)}
            label="Phút"
            value={timeLeft.minutes}
          />
          <TimeBox
            ref={(el) => (timeBoxesRef.current[3] = el)}
            label="Giây"
            value={timeLeft.seconds}
          />
        </div>
      </div>
    </div>
  );
};

const TimeBox = React.memo(
  React.forwardRef(({ label, value }, ref) => (
    <div ref={ref} className="time-box">
      <span>{value}</span>
      <p>{label}</p>
    </div>
  ))
);

export default CountDown;
