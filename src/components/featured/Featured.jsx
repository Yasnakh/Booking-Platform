import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">

      <div className="featuredItem">
        <img
          src="https://media.cntraveller.com/photos/611bf0fb7048754865719e3a/16:9/w_1280,c_limit/view-of-the-liffey-from-liberty-hall-dublin-ireland-conde-nast-traveller-4feb16-Tara-Morgan.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://www.redfin.com/blog/wp-content/uploads/2023/04/RenoGettyImages-1395807707.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://www.seesight-tours.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsee-sight-tours%2Fimage%2Fupload%2Fv1643117196%2Fstrapi%2FAustin_Texas_Skyline_Shutterstock2022_7ac51bb200.jpg&w=3840&q=80"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
      
    </div>
  );
};

export default Featured;
