import { FaHeart } from "react-icons/fa";
import male from "../assets/male.jpg";
import female from "../assets/female.jpg";

const Couple = () => {
  return (
    <div id="couple-section" className="couple-title">
      <h1>Cặp đôi</h1>
      <p>
        Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần
        thiết cho chính bạn.
      </p>
      <div className="row">
        <div className="male">
          <img src={male} alt="male" />
          <p>Nguyễn Văn Anh</p>
          <h2>Con ông: Nguyên Văn A</h2>
          <h2>Con bà: Trương Thị B</h2>
          <h3>Xin chào!</h3>
        </div>
        <div className="heart-couple">
          <FaHeart />
        </div>
        <div className="female">
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
