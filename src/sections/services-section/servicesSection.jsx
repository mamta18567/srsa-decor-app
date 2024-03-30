import Brands from "../../brands/brands";
import Home from "../../home/home";
import RequestSection from "../../request-action/request";
import ReviewSection from "../../reviews/reviews";
import Services from "../../services/services";

const ServicesSection = () => {

  return (
    <>
      <Home
        height={"60vh"}
        heading={"Products"}
      />
      <Services />
      <ReviewSection />
      <RequestSection />
      <Brands />
    </>
  )

}

export default ServicesSection;