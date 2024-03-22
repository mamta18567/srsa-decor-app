import About from "../../about/about"
import Brands from "../../brands/brands";
import Home from "../../home/home";
import RequestSection from "../../request-action/request";
import ReviewSection from "../../reviews/reviews";
import Services from "../../services/services";

const AboutSection = () => {

  return (
    <>
      <Home height={"70vh"}/>
      <About />
      <Services />
      <ReviewSection />
      <RequestSection />
      <Brands />
    </>
  )

}

export default AboutSection;