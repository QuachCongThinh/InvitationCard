import { useEffect, useRef, useState, useCallback } from "react";

const importAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
};

const weddingImages = importAll(
  require.context("../assets/image/album", false, /\.(svg|png|jpe?g)$/)
);

const Album = () => {
  const imageRefs = useRef([]);
  const [visibleImages, setVisibleImages] = useState([]);

  const setImageRef = useCallback((el, index) => {
    imageRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imgIndex = entry.target.getAttribute("data-index");
            setVisibleImages((prev) => [...prev, imgIndex]);
            observer.unobserve(entry.target); 
          }
        });
      },
      {
        rootMargin: "100px", 
      }
    );

    imageRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => {
      imageRefs.current.forEach((img) => {
        if (img) observer.unobserve(img);
      });
    };
  }, []);

  return (
    <div id="album-section" className="album-section">
      <h1>Album Hình Cưới</h1>
      <p>
        Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó
        sâu sắc sẽ cho bạn dũng khí.
      </p>
      <div className="picture">
        {weddingImages.map((image, index) => (
          <img
            key={index}
            data-index={index}
            src={visibleImages.includes(String(index)) ? image : ""}
            alt="Wedding image"
            loading="lazy"  
            ref={(el) => setImageRef(el, index)}
            style={{
              transition: "opacity 0.5s ease-in-out", 
              opacity: visibleImages.includes(String(index)) ? 1 : 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Album;
