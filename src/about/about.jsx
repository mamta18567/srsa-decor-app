import "./about.css"
import image from "../assets/srsawebsite/WARDROBE/FB_IMG_1638341580591.jpg"

const About = () => {

  return (
    <>
      <div className="about-section">
        <div className="about-container">
          <div className="section-1">
            <h6>BRAND NEW APP TO BLOW YOUR MIND</h6>
            <h1>We’ve made a life that will change you</h1>
            <p>We are here to listen from you deliver exellence</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
            <button className="btn">Get Started Now</button>
          </div>
          <div className="about-image">
             <img src={image} alt="wardrobe-image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About;