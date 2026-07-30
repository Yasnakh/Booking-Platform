import "./trainFeatures.css";

const TrainFeatured = () => {
  return (
    <div className="trainfeatured">

      <div className="trainfeaturedItem">
        <img
          src="https://spanishstudies.org/wp-content/uploads/elementor/thumbs/spanish-studies-abroad-barcelona-sagrada-familia-pqlcfgexmte69cxpqwkxtfxabqx61rz30dal4rwha4.jpg"
          alt=""
          className="trainfeaturedImg"
        />
        <div className="trainfeaturedTitles">
          <h2>London - Sheffield</h2>
          <span>Jul 6 - Jul 8</span>
        </div>       
      </div>

      <div className="trainfeaturedItem">
        <img
          src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/d7/bc/43.jpg"
          alt=""
          className="trainfeaturedImg"
        />
        <div className="trainfeaturedTitles">
          <h2>Rome - Milan</h2>
          <span>Jul 16 - Jul 20</span>
        </div>
      </div>

      <div className="trainfeaturedItem">
        <img
          src="https://www.thetrainline.com/content/vul/hero-images/city/seville/1x.jpg"
          alt=""
          className="trainfeaturedImg"
        />
        <div className="trainfeaturedTitles">
          <h2>Madrid - Seville</h2>
          <span>Jul 4 - Jul 11</span>
        </div>
      </div>

      <div className="trainfeaturedItem">
        <img
          src="https://cdn2.veltra.com/ptr/20181205033924_2056352541_2644_0.jpg?imwidth=550&impolicy=custom"
          alt=""
          className="trainfeaturedImg"
        />
        <div className="trainfeaturedTitles">
          <h2>Frankfurt - Cologne</h2>
          <span>Aug 5 - Aug 10</span>
        </div>
      </div>

    </div>
  );
};

export default TrainFeatured;
