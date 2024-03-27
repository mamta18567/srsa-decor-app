import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomeSection from "../sections/home-section/homeSection";
import AboutSection from "../sections/about-section/aboutSection"
import ServicesSection from "../sections/services-section/servicesSection";
import ProjectSection from "../sections/projects-section/projectSection";
import BlogSection from "../sections/blog-section/blogSection";

const MainRoute = () => (
  <Suspense fallback={""}>
    <Routes>
      <Route path="/" element={<HomeSection />} />
      <Route path="/about" element={<AboutSection />} />
      <Route path="/services" element={<ServicesSection />} />
      <Route path="/projects" element={<ProjectSection />} />
      <Route path="/blog-home" element={<BlogSection />} />
    </Routes>
  </Suspense>
);

export default MainRoute;
