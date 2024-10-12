import { useState, useEffect } from "react";
import "../style/style.scss";
import { FaHeart } from "react-icons/fa";
// import Loader from "../components/Loader";
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();
const Header = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 6000);
  //   return () => clearTimeout(timer);
  // }, []);

  const [scrolling, setScrolling] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 50);
      requestAnimationFrame(() => {
        setParallaxOffset(scrollTop * 0.5);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToCouple = () => {
    const coupleSection = document.getElementById("couple-section");
    if (coupleSection) {
      const yOffset = -100;
      const y =
        coupleSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };
  const handleScrollToEvent = () => {
    const eventSection = document.getElementById("event-section");
    if (eventSection) {
      const yOffset = -100;
      const y =
        eventSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="container">
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <>
        <div className={`header parallax ${scrolling ? "scrolling" : ""}`}>
          <div className="overlay"></div>
          <div className="title">
            <div className="left">
              <h1>
                <span>A</span>
                <FaHeart />
                <span>E</span>
              </h1>
              <p>About to get married</p>
            </div>
            <div className="right">
              <div className="nav">
                <ul>
                  <li>
                    <a href="#!" onClick={handleScrollToCouple}>
                      Cặp đôi
                    </a>
                  </li>
                  <li>
                    <a href="#!" onClick={handleScrollToEvent}>
                      Sự kiện cưới
                    </a>
                  </li>
                  <li>
                    <a href="/">Album hình cưới</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="text-header"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            <h1>Save the Date</h1>
            <div className="name">
              <h1 className="name-header">
                <span>Văn Anh</span>
                <FaHeart />
                <span>Thị Em</span>
                <p>1 January 2025</p>
              </h1>
            </div>
          </div>
        </div>
      </>
      {/* )} */}
    </div>
  );
};

export default Header;
