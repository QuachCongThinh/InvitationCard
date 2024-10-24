import { useState, useEffect, useRef } from "react";
import "../style/style.scss";
import { FaHeart } from "react-icons/fa";
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

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
  const handleScrollToSection = (sectionId, offset) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = offset || -70;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  // const handleScrollToCouple = () => {
  //   const coupleSection = document.getElementById("couple-section");
  //   if (coupleSection) {
  //     const yOffset = -70;
  //     const y =
  //       coupleSection.getBoundingClientRect().top +
  //       window.pageYOffset +
  //       yOffset;

  //     window.scrollTo({
  //       top: y,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // const handleScrollToEvent = () => {
  //   const eventSection = document.getElementById("event-section");
  //   if (eventSection) {
  //     const yOffset = -69;
  //     const y =
  //       eventSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

  //     window.scrollTo({
  //       top: y,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // const handleScrollToAlbum = () => {
  //   const albumSection = document.getElementById("album-section");
  //   if (albumSection) {
  //     const yOffset = -100;
  //     const y =
  //       albumSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

  //     window.scrollTo({
  //       top: y,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div id="container">
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
            {!isMenuOpen && (
              <div
                className={`hamburger ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            <div ref={menuRef} className={`nav ${isMenuOpen ? "active" : ""}`}>
              <ul>
                <li>
                  <a
                    href="#!"
                    onClick={() => handleScrollToSection("couple-section")}
                  >
                    Cặp đôi
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    onClick={() => handleScrollToSection("event-section")}
                  >
                    Sự kiện cưới
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    onClick={() => handleScrollToSection("album-section")}
                  >
                    Album hình cưới
                  </a>
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
    </div>
  );
};

export default Header;
