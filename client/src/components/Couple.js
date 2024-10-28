import React, { useEffect, useRef } from "react";
import { FaHeart } from "react-icons/fa";
import male from "../assets/image/male.jpg";
import female from "../assets/image/female.jpg";

const Couple = () => {
  const rowRef = useRef(null);

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

    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return () => {
      if (rowRef.current) {
        observer.unobserve(rowRef.current);
      }
    };
  }, []);

  return (
    <div id="couple-section" className="couple-title">
      <h1>Cặp đôi</h1>
      <p>
        Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần
        thiết cho chính bạn.
      </p>
      <div ref={rowRef} className="row animate">
        <div className="male animate">
          <img src={male} alt="male" />
          <p>Nguyễn Văn Anh</p>
          <h2>Con ông: Nguyên Văn A</h2>
          <h2>Con bà: Trương Thị B</h2>
          <h3>Xin chào!</h3>
        </div>
        <div className="heart-couple animate">
          <FaHeart />
        </div>
        <div className="female animate">
          <img src={female} alt="female" />
          <p>Trần Thị Em</p>
          <h2>Con ông: Trần D</h2>
          <h2>Con bà: Trương Thị E</h2>
          <h3>Xin chào!</h3>
        </div>
      </div>
    </div>
  );
};

export default Couple;
