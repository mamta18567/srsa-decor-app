/* eslint-disable react/prop-types */
import "./home.css"

const Home = ({height, heading}) => {

  return (
    <>
      <div className="home" style={{height: height ? height : "100vh"}}>
        <div className="overlay" style={{height: height ? height : "100%"}}></div>
        <div className="home-content">
          <h1 className="banner-content">{heading}</h1>
          <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each. You may be saying to yourself.</p>
          <button className="primary-btn">GET STARTED</button>
        </div>
      </div>
    </>
  )
}

export default Home;