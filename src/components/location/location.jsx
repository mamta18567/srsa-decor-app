const Location = ({ googleMapsLink }) => {
  return (
    <div style={{margin:"30px ", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <iframe style={{border:"none"}}
        width="850"
        height="450"
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBK0Cf-QHxMuCzy_glEVTU4WL3V3fF-2hY&q=${googleMapsLink}`}
      ></iframe>
    </div>
  );
};

export default Location