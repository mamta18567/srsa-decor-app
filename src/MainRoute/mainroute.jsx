import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomeSection from "../sections/home-section/homeSection";
import AboutSection from "../sections/about-section/aboutSection"

const MainRoute = () => (
  <Suspense fallback={""}>
    <Routes>
      <Route path="/" element={<HomeSection />} />
      <Route path="/about" element={<AboutSection />} />
    </Routes>
  </Suspense>
);

export default MainRoute;
