import "./singleProject.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Project = () => {

  const image = localStorage.getItem('image');
  const heading = localStorage.getItem('heading');
  const ratings = 5

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const starColor = i < ratings ? "#c6b069" : "#777";
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} style={{ color: starColor }} />
      );
    }
    return stars;
  };
  return (
    <>
      <div className="project-container">
        <div className="project-details">
          <div className="project-section">
            <div className="project-image flex-class">
              <img src={image} alt="" />
            </div>
            <div className="details-section flex-class">
              <div className="details-content">
                <h3>{heading}</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <div className="minor-detail">
                  <ul className="list1 list">
                    <li>Rating</li>
                    <li>Client</li>
                    <li>Website</li>
                    <li>Completed</li>
                  </ul>
                  <ul className="list2 list">
                    <li>
                    <div className="rating">:{renderStars()}</div>
                    </li>
                    <li>: Envato</li>
                    <li>: Themeforest.net</li>
                    <li>: 17 Aug 1028</li>
                  </ul>
                </div>
                <div class="social-links mt-30">
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                  <a href="#"><i class="fa fa-behance"></i></a>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>

          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reiciendis sunt, provident similique ipsam aperiam nobis delectus qui hic voluptate, obcaecati aut aliquid nesciunt nostrum iusto doloremque nemo corrupti pariatur.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ad nulla architecto placeat quo beatae dicta facere fuga veniam aspernatur! Neque rem soluta dolorem! Repudiandae excepturi magni quidem officiis pariatur itaque consectetur numquam odit magnam, ex tempora molestiae doloribus officia inventore, assumenda eius amet atque. Itaque at officia fugit tempore.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project;