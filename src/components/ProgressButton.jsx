import { useEffect, useState } from "react";

function ProgressButton() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const calculateScrollValue = () => {
      const pos = document.documentElement.scrollTop;
      const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollValue = Math.round((pos * 100) / calcHeight);

      setScrollProgress(scrollValue);
      setShowButton(pos > 100);
    };

    window.addEventListener("scroll", calculateScrollValue);
    window.addEventListener("load", calculateScrollValue);

    return () => {
      window.removeEventListener("scroll", calculateScrollValue);
      window.removeEventListener("load", calculateScrollValue);
    };
  }, []);

  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div
      id="progress"
      style={{
        display: showButton ? "grid" : "none",
        background: `conic-gradient(#fff ${scrollProgress}%, #e6006d ${scrollProgress}%)`,
      }}
      onClick={scrollToTop}
    >
      <span id="progress-value">
        <i className="bx bxs-chevrons-up"></i>
      </span>
    </div>
  );
}

export default ProgressButton;
