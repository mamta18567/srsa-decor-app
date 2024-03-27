import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faDribbble, faBehance } from '@fortawesome/free-brands-svg-icons';
import "./sidebar.css"
import user1 from "../../assets/user1.png"

const Sidebar = () => {

  return (
    <>
      <div className='sidebar-section'>
        <div className="input-box">
          <input type="text" placeholder="Search Posts" />
          <button type="submit">A</button>
        </div>

        <div className='user--infowidget flex'>
          <img src={user1} alt="User1" />
          <h4>Charlie Barber</h4>
          <p>Senior Blog Writer</p>
          <div className="social-media">
            <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
            <a href=""><FontAwesomeIcon icon={faDribbble} /></a>
            <a href=""><FontAwesomeIcon icon={faBehance} /></a>
          </div>
          <p>Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.</p>
        </div>
        <div className='flex'>
          <h4 className='category-title'>Popular Posts</h4>
          <div>
            <div className='posts'>
              <div>
                <img src={user1} alt="" />
              </div>
              <div className='details'>
                <a href=""><h6>Space the final frontier</h6></a>
                <p>02 Hours ago</p>
              </div>
            </div>
            <div className='posts'>
              <div>
                <img src={user1} alt="" />
              </div>
              <div className='details'>
                <a href=""><h6>Space the final frontier</h6></a>
                <p>02 Hours ago</p>
              </div>
            </div>
            <div className='posts'>
              <div>
                <img src={user1} alt="" />
              </div>
              <div className='details'>
                <a href=""><h6>Space the final frontier</h6></a>
                <p>02 Hours ago</p>
              </div>
            </div>
            <div className='posts'>
              <div>
                <img src={user1} alt="" />
              </div>
              <div className='details'>
                <a href=""><h6>Space the final frontier</h6></a>
                <p>02 Hours ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex'>
          <h4 className='category-title'>Post Categories</h4>
          <ul className='post-categories'>
            <li>
              <a href="" className='post-list'>
                <p>Technology</p>
                <p>37</p>
              </a>
            </li>
            <li>
              <a href="" className='post-list'>
                <p>Technology</p>
                <p>37</p>
              </a>
            </li>
            <li>
              <a href="" className='post-list'>
                <p>Technology</p>
                <p>37</p>
              </a>
            </li>
            <li>
              <a href="" className='post-list'>
                <p>Technology</p>
                <p>37</p>
              </a>
            </li>
            <li>
              <a href="" className='post-list'>
                <p>Technology</p>
                <p>37</p>
              </a>
            </li>
            <li>
              <a href="" className='post-list'>
                <p>Technology</p>
                <p>37</p>
              </a>
            </li>
            <li>
              <a href="" className='post-list'>
                <p>Technology</p>
                <p>37</p>
              </a>
            </li>
          </ul>
        </div>
        <div className='flex news'>
          <h4 className='category-title'>Newsletter</h4>
          <p>Here, I focus on a range of items and features that we use in life without giving them a second thought.</p>
          <div className='email-box'>
            <div className='email'>
              <span>A</span>
              <input type="email" placeholder='Enter email' />
            </div>
            <div>
              <button className='email-btn'>Subscribe</button>
            </div>
          </div>
          <p>You can unsubscribe at any time</p>
        </div>
        <div className='flex tags-section'>
          <h4 className='category-title'>Tag Clouds</h4>
          <div className='tags-container'>
          <ul className='tags'>
            <li>Technology</li>
            <li>Fashion</li>
            <li>Architecture</li>
            <li>Fashion</li>
            <li>Food</li>
            <li>Technology</li>
            <li>Lifestyle</li>
            <li>Art</li>
            <li>Adventure</li>
            <li>Food</li>
            <li>Lifestyle</li>
            <li>Adventure</li>
          </ul>
          </div>
        </div>
      </div>
    </>
  )

}

export default Sidebar;