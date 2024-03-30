import { useState } from "react";
import './hoverBox.css';
import { Link } from "react-router-dom";

const HoverBox = ({ imageSrc, altText, heading }) => {
  const [hovering, setHovering] = useState(false);
  const [openBox, setOpenBox] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  const handleAboutClick = (newImage, heading) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    localStorage.setItem('image', newImage);
    localStorage.setItem('heading', heading)
    setOpenBox(true);
  };

  return (
    <>
      <div className="image-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="interior-image" src={imageSrc} alt={altText} />
        {hovering && (
          <div className="text-overlay">
            <div className="hover-content">
              <h3>{heading}</h3>
              <Link to={"/project-details"}>
                <button onClick={() => handleAboutClick(imageSrc, heading)}>More Details</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HoverBox;
