import { Link } from "react-router-dom";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const FormConfirm = () => {
  return (
    <div className="btn-custom">
      <Link to="/confirm">
        <button className="confirm-btn">
          <MdOutlineMarkEmailRead />
          Xác nhận tham dự
        </button>
      </Link>
    </div>
  );
};
export default FormConfirm;
