import "./flightFeatures.css";

const FlightFeatured = () => {
  return (
    <div className="flightfeatured">

      <div className="flightfeaturedItem">
        <img
          src="https://upload.travelawaits.com/ta/uploads/2023/02/waters-of-oslo-800x800.jpg"
          alt=""
          className="flightfeaturedImg"
        />
        <div className="flightfeaturedTitles">
          <h2>Oslo to Stockholm</h2>
          <span>Jul 6 - Jul 8</span>
        </div> 
      </div>

      <div className="flightfeaturedItem">
        <img
          src="https://adamfayed.com/wp-content/uploads/2022/04/Berlin.jpg"
          alt=""
          className="flightfeaturedImg"
        />
        <div className="flightfeaturedTitles">
          <h2>Berlin to Lisbon</h2>
          <span>Jul 16 - Jul 20</span>
        </div>
      </div>

      <div className="flightfeaturedItem">
        <img
          src="https://www.tripsavvy.com/thmb/GyDg8X4R8Y_anVmBv0qadOd2maM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/VallettaMaltaatsunset_SylvainSonnet_GettyImages-a89c3b61829a4057be48628eda613e04.jpg"
          alt=""
          className="flightfeaturedImg"
        />
        <div className="flightfeaturedTitles">
          <h2>Paris to Valleta</h2>
          <span>Jul 4 - Jul 11</span>
        </div>
      </div>

      <div className="flightfeaturedItem">
        <img
          src="https://delivery.gfobcontent.com/api/public/content/01ffac3e98194108a740665b4235ba2b?v=3492389a"
          alt=""
          className="flightfeaturedImg"
        />
        <div className="flightfeaturedTitles">
          <h2>Rome to Athens</h2>
          <span>Aug 5 - Aug 10</span>
        </div>
      </div>
      
    </div>
  );
};

export default FlightFeatured;
