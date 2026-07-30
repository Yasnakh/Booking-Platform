import "./searchItem.css";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 

const SearchItem = () => {
  
  const navigate = useNavigate();

  const handleButtonClick = () => {
      navigate("/hotels/:id");
  };

  return (
    <div className="searchI">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="sImg"
      />
      <div className="sDesc">
        <h1 className="sTitle">Tower Street Apartments</h1>
        <span className="sDistance">500m from center</span>
        <span className="sTaxiOp">Free airport taxi</span>
        <span className="sSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="sFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="sCancelOp">Free cancellation </span>
        <span className="sCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="sDetails">
        <div className="sRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="sDetailTexts">
          <span className="sPrice">$112</span>
          <span className="sTaxOp">Includes taxes and fees</span>
          <button onClick={handleButtonClick} className="sCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
