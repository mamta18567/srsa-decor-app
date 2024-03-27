import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import "./blog.css"

import image1 from "../../assets/websitefrontfirst.jpg"

const Blog = () => {

  return (
    <>
      <div className='blog-section'>
        <div className="blog">
          <div className='blog-part'>
            <div className='blog-tags-container'>
              <ul className='blog-tags'>
                <li><a>Food,</a></li>
                <li><a>Technology,</a></li>
                <li><a>Politics,</a></li>
                <li><a>Lifestyle</a></li>
              </ul>
            </div>
            <div className='user-details'>
              <p><a>Mark wiens</a><span><FontAwesomeIcon icon={faUser} /></span></p>
              <p><a>12 Dec, 2017</a><span><FontAwesomeIcon icon={faUser} /></span></p>
              <p><a>1.2M views</a><span><FontAwesomeIcon icon={faUser} /></span></p>
              <p><a>06 comments</a><span><FontAwesomeIcon icon={faUser} /></span></p>
            </div>
          </div>

          <div className='image-section'>
            <img src={image1} alt="Not Available" />
            <h3>Astronomy Binoculars A Great Alternative</h3>
            <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</p>
            <div>
              <button className='button'>View More</button>
            </div>
          </div>
        </div>

        <div className="blog">
          <div className='blog-part'>
            <div className='blog-tags-container'>
              <ul className='blog-tags'>
                <li><a>Food,</a></li>
                <li><a>Technology,</a></li>
                <li><a>Politics,</a></li>
                <li><a>Lifestyle</a></li>
              </ul>
            </div>
            <div className='user-details'>
              <p><a>Mark wiens</a><span><FontAwesomeIcon icon={faUser} /></span></p>
              <p><a>12 Dec, 2017</a><span><FontAwesomeIcon icon={faUser} /></span></p>
              <p><a>1.2M views</a><span><FontAwesomeIcon icon={faUser} /></span></p>
              <p><a>06 comments</a><span><FontAwesomeIcon icon={faUser} /></span></p>
            </div>
          </div>

          <div className='image-section'>
            <img src={image1} alt="Not Available" />
            <h3>Astronomy Binoculars A Great Alternative</h3>
            <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</p>
            <div>
              <button className='button'>View More</button>
            </div>
          </div>
        </div>

        <div className="blog">
          <div className='blog-part'>
            <div className='blog-tags-container'>
              <ul className='blog-tags'>
                <li><a>Food,</a></li>
                <li><a>Technology,</a></li>
                <li><a>Politics,</a></li>
                <li><a>Lifestyle</a></li>
              </ul>
            </div>
            <div className='user-details'>
              <p><a>Mark wiens</a><span><FontAwesomeIcon icon={faUser} /></span></p>
              <p><a>12 Dec, 2017</a><span><FontAwesomeIcon icon={faUser} /></span></p>
              <p><a>1.2M views</a><span><FontAwesomeIcon icon={faUser} /></span></p>
              <p><a>06 comments</a><span><FontAwesomeIcon icon={faUser} /></span></p>
            </div>
          </div>

          <div className='image-section'>
            <img src={image1} alt="Not Available" />
            <h3>Astronomy Binoculars A Great Alternative</h3>
            <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</p>
            <div>
              <button className='button'>View More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog