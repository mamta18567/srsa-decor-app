import "./work.css"
import HoverBox from "../components/hoverBox/hoverBox"
import g1 from "../assets/srsawebsite/TABLE/dd.jpg"
import g2 from "../assets/srsawebsite/BED/Selected/ki01.jpg"
import g3 from "../assets/srsawebsite/paneling/glass.jpg"
import g4 from "../assets/srsawebsite/BED/Selected/FB_IMG_1685007557380.jpg"
import g5 from "../assets/srsawebsite/SEATER/Selected_Sofas/FB_IMG_1689503572710.jpg"
import g6 from "../assets/srsawebsite/TV UNIT/FB_IMG_1645014983279.jpg"
import g7 from "../assets/srsawebsite/WARDROBE/IMG_20190823_211833.jpg"

const Work = () => {

  return (
    <>
      <div className="work-container">
        <div className="work-content">
          <h1>Our Recent Works may impress you</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="image-section">
          <div className="top-container">
            <div className="hover-box">
              <HoverBox
                imageSrc={g1}
                altText="Picture 1"
                heading="Lavendar ambient interior"
              />
            </div>
            <div className="hover-box">
              <HoverBox
                imageSrc={g2}
                altText="Picture 2"
                heading="Ambient interior"
              />
            </div>
          </div>
          <div className="bottom-container">
            <div className="hover-box">
              <HoverBox
                imageSrc={g3}
                altText="Picture 3"
                heading="Ambient interior"
              />
            </div>
            <div className="hover-box">
              <HoverBox
                imageSrc={g4}
                altText="Picture 4"
                heading="Lavendar ambient interior"
              />
            </div>
            <div className="hover-box">
              <HoverBox
                imageSrc={g5}
                altText="Picture 1"
                heading="Lavendar ambient interior"
              />
            </div>
          </div>
          <div className="bottom-container">
            <div className="hover-box">
              <HoverBox
                imageSrc={g6}
                altText="Picture 1"
                heading="Lavendar ambient interior"
              />
            </div>
            <div className="hover-box">
              <HoverBox
                imageSrc={g7}
                altText="Picture 1"
                heading="Lavendar ambient interior"
              />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Work;