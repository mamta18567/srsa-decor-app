import Blog from "../blog/blog";
import Sidebar from "../sidebar/sidebar";
import "./homeBlog.css"

const HomeBlog = () => {

  return (
    <>
      <section className="home-blog">
        <div className="overlay"></div>
        <div className="home-content">
          <h1 className="banner-content">Dude You’re Getting a Telescope</h1>
          <p>There is a moment in the life of any aspiring astronomer that it is time to buy that first</p>
          <button className="primary-btn">View More</button>
        </div>
      </section>

      <section className="blog-service">
        <div className="blog-service-container">
          <div className="service service-1">
            <div className="service-overlay">
              <div className="serviceblog-content">
                <a href=""><h4>Moduler Kitchen</h4></a>
                <hr />
                <p>Enjoy your social life together</p>
              </div>
            </div>
          </div>
          <div className="service service-2">
            <div className="service-overlay">
              <div className="serviceblog-content">
                <a href=""><h4>Bed</h4></a>
                <hr />
                <p>Enjoy your social life together</p>
              </div>
            </div>
          </div>
          <div className="service service-3">
            <div className="service-overlay">
              <div className="serviceblog-content">
                <a href=""><h4>Wardrobe</h4></a>
                <hr />
                <p>Enjoy your social life together</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs">
        <div>
          <Blog />
        </div>
        <div>
          <Sidebar />
        </div>
      </section>
    </>
  )
}

export default HomeBlog;