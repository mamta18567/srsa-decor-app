import Brands from "../../brands/brands";
import Projects from "../../components/projects/projects";
import Home from "../../home/home";
import RequestSection from "../../request-action/request";
import ReviewSection from "../../reviews/reviews";

const ProjectSection = () => {

  return (
    <>
      <Home
        height={"60vh"}
        heading={"Projects"}
      />
      <Projects />
      <ReviewSection />
      <RequestSection />
      <Brands />
    </>
  )

}

export default ProjectSection;