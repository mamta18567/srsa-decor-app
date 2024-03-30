import Brands from "../../brands/brands";
import Project from "../../components/single-project/singleProject";
import Home from "../../home/home";

const ProjectDetailSection = ({imageSrc}) => {

  return (
    <>
      <Home
        height={"60vh"}
        heading={"Project Details"}
      />
      <Project />
      <Brands />
    </>
  )

}

export default ProjectDetailSection;