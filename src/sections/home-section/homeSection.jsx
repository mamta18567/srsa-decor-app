import Home from "../../home/home"
import Services from "../../services/services"
import Work from "../../work/work"
import Features from "../../features/features";
import Reviews from "../../reviews/reviews";
import RequestSection from "../../request-action/request";
import Brands from "../../brands/brands"

const HomeSection = () => {

  return (
    <>
      <Home
        height={"100vh"}
        heading={"Home"} 
      />
      <Services />
      <Work />
      <Features />
      <Reviews />
      <RequestSection />
      <Brands />
    </>
  )
}

export default HomeSection;