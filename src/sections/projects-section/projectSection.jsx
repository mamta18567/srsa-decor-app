import Brands from "../../brands/brands";
import Home from "../../home/home";
import RequestSection from "../../request-action/request";
import ReviewSection from "../../reviews/reviews";
import Work from "../../work/work";

const ProjectSection = () => {

  return (
    <>
      <Home
        height={"60vh"}
        heading={"Projects"}
      />
      <Work />
      <ReviewSection />
      <RequestSection />
      <Brands />
    </>
  )

}

export default ProjectSection;