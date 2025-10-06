/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with ID "counter",
 * with a small offset from the top for better visual placement.
 */
import { useEffect } from "react";

const Button = ({ text, className, id }) => {
  useEffect(() => {
    document.documentElement.style.overflowY = 'hidden';

    return () => {
      document.documentElement.style.overflowY = 'auto';
    };
  }, [])
  const handleScroll = () => {
    // document.body.style.overflow = 'auto';
    document.documentElement.style.overflowY = 'auto';
  }

  return (
    <a
      onClick={(e) => {
        e.preventDefault(); // Stop the link from jumping instantly
        handleScroll()
        const target = document.getElementById("counter"); // Find the section with ID "counter"

        // Only scroll if we found the section and an ID is passed in
        // taht prevents the contact button from scrolling to the top
        if (target && id) {
          const offset = window.innerHeight * 0.15; // Leave a bit of space at the top

          // Calculate how far down the page we need to scroll
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          // Scroll smoothly to that position
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`} // Add base + extra class names
    >
      <div className=" Ccta-button cta-button group">
        <div className="bg-circle" />
          <p className="text animate-float">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;

{/* <span className="ping text-gray-900 z-40 ">&hellip;</span> */}