import "./contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const ContactPage = () => {

  return (
    <>
      <div className="contact-page">
        <div className="contact-section">
          <div className="contact-details">
            <div className="address-details">
              <span><FontAwesomeIcon icon={faHome} /></span>
              <div className="address">
                <h5>New Delhi - 110019</h5>
                <p>A/389 Double storey Kalkaji</p>
              </div>
            </div>
            <div className="address-details">
              <span><FontAwesomeIcon icon={faPhone} /></span>
              <div className="address">
                <h5>8287814994, 8527950443</h5>
                <p> 7 days open 10:00 to 7:00 Pm</p>
              </div>
            </div>
            <div className="address-details">
              <span><FontAwesomeIcon icon={faEnvelope} /></span>
              <div className="address">
                <h5>srsadecor@gmail.com</h5>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <input type="text" placeholder="Enter your name" />
            <input type="" placeholder="Enter email address" />
            <input type="text" placeholder="Enter your subject" />
          </div>
          <div className="textarea">
            <textarea placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
            <div>
              <button className="textarea-button">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage;