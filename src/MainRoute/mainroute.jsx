import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomeSection from "../sections/home-section/homeSection";
import AboutSection from "../sections/about-section/aboutSection"
import ServicesSection from "../sections/services-section/servicesSection";
import ProjectSection from "../sections/projects-section/projectSection";
import BlogSection from "../sections/blog-section/blogSection";
import ContactSection from "../sections/contact-section/contactSection";
import ProjectDetailSection from "../sections/project-detail-section/projectDetail";

const MainRoute = () => (
  <Suspense fallback={""}>
    <Routes>
      <Route path="/" element={<HomeSection />} />
      <Route path="/about" element={<AboutSection />} />
      <Route path="/products" element={<ServicesSection />} />
      <Route path="/projects" element={<ProjectSection />} />
      <Route path="/blog-home" element={<BlogSection />} />
      <Route path="/contact" element={<ContactSection />} />
      <Route path="/project-details" element={<ProjectDetailSection />} />
    </Routes>
  </Suspense>
);

export default MainRoute;
