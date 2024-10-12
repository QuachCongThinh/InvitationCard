import "../style/style.scss";
import Header from "../components/Header";
import Couple from "../components/Couple";
import FormConfirm from "./FormConfirm";
import CountDown from "./Countdown";
import Event from "./Event";

const Layout = () => {
  return (
    <div id="container">
      <Header />
      <Couple />
      <FormConfirm />
      <CountDown />
      <Event />
    </div>
  );
};

export default Layout;
