/* eslint-disable no-unused-vars */
import Header from './header/header';
import MainRoute from './MainRoute/mainroute';
import Footer from "./footer/footer"
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Header />
        <MainRoute />
        <Footer />
      </Router>
    </>
  )
}

export default App
