import "../../components/flightTickets/flightTickets.css";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";


const TrainTickets = () => {
  
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/trainSub");
    };

  return (
    <div className="ticSearchItem">
      <div className="ticDesc">
        <h1 className="ticTitle">7:25 AM</h1>
        <span className="ticDistance">ZURICH . JUL 29</span>
        <span className="ticAirport">
        Zurich Hauptbahnhof rail station
        </span>  
        <h1 className="ticTitle">
          3:12 PM
        </h1>
        <span className="ticDistance">INTERLAKEN . AUG 5</span>
        <span className="ticAirport">
        Interlaken Ost rail station
        </span>        
      </div>
      <div class="tichr">
        <p className="ticp1">4h 50m</p>
        <hr class="tichr1"/>
        <p className="ticp2">4h 48m</p>
        <hr class="tichr2"/>
      </div>
      <div className="ticDesc">
        <h1 className="ticTitle">12:15 PM</h1>
        <span className="ticDistance">INTERLAKEN . JUL 29</span>
        <span className="ticSubtitle">
        </span>
        <h1 className="ticTitle">
          8:00 PM
        </h1>
        <span className="ticDistance">ZURICH . AUG 5 </span>
        <span className="ticCancelOpSubtitle">
        </span>
      </div>
      <div className="ticDetails">
        <span className="ticPersonalDet"> Included: personal item</span>
          <span className="ticRating">123 - A</span>
            <span className="tictotalprice">Total price for all travelers</span>
        <div className="ticDetailTexts">
          <button onClick={handleButtonClick} className="ticCheckButton">See train</button>
        </div>
      </div>
    </div>
  );
};

export default TrainTickets;
