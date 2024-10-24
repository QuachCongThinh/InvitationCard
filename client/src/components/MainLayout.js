import React, { useState, useEffect } from "react";
import "../style/style.scss";
import Header from "../components/Header";
import Couple from "../components/Couple";
import FormConfirm from "./FormConfirm";
import CountDown from "./Countdown";
import Event from "./Event";
import Album from "./Album";
import Video from "./Video";
// import Loader from "./Loader";
import { IoIosArrowUp } from "react-icons/io";

const Layout = () => {
  // const [loading, setLoading] = useState(true);
  const [showButton, setShowButton] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById("scrollToTopButton");
      if (window.scrollY > 500) {
        setShowButton(true);
        button?.classList.add("visible");
      } else {
        setShowButton(false);
        button?.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="container">
      {/* {loading ? (
        <Loader />
      ) : ( */}
        <>
          {showButton && (
            <button id="scrollToTopButton" onClick={scrollToTop}>
              <IoIosArrowUp />
            </button>
          )}
          <Header />
          <Couple />
          <FormConfirm />
          <CountDown />
          <Event />
          <Video />
          <Album />
        </>
      {/* )} */}
    </div>
  );
};

export default Layout;
