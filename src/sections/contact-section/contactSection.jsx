import ContactPage from "../../contact/contact";
import Home from "../../home/home";
import Location from "../../components/location/location";

const ContactSection = () => {

  const googleMapsLink = " https://www.google.com/maps/place/SRSA+DECOR/@28.5435343,77.2489601,15z/data=!4m6!3m5!1s0x390ce3ffb68775bb:0x81bcbed60330b53f!8m2!3d28.5435343!4d77.2489601!16s%2Fg%2F11vm7lvrpj?entry=ttu";

  return (
    <>
      <Home
        height={"60vh"}
        heading={"Contact Us"}
      />
      <Location googleMapsLink={googleMapsLink}/>
      <ContactPage />
    </>
  )
}

export default ContactSection