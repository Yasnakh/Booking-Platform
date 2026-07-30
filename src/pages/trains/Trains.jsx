import {
    faBed,
    faCalendarDays,
    faPerson,
    faPlane,
    faTaxi,
    faTrain,
    faArrowRight,
    faTrainSubway,
    faUserPen,
  } from "@fortawesome/free-solid-svg-icons";
  import Footer from "../../components/footer/Footer";
  import MailList from "../../components/mailList/MailList";
  import Navbar from "../../components/navbar/Navbar";
  import TrainFeatures from "../../components/trainFeatures/TrainFeatures";
  import TrainFeatures2 from "../../components/trainFeatures/TrainFeatures2";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { DateRange } from "react-date-range";
  import { useState } from "react";
  import { format } from "date-fns";
  import { useNavigate } from "react-router-dom";
  import { Link, NavLink } from 'react-router-dom';
  import "react-date-range/dist/styles.css";
  import "react-date-range/dist/theme/default.css";
  import "./trains.css";
  
  const Trains = ({ type }) => {

    const [destination, setDestination] = useState("");

    const [openDate, setOpenDate] = useState(false);

    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);

    const [openOptions, setOpenOptions] = useState(false);

    const [options, setOptions] = useState({
      adult: 1,
      children: 0,
    });
  
    const navigate = useNavigate();
  
    const handleOption = (name, operation) => {
      setOptions((prev) => {
        return {
          ...prev,
          [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
      });
    };
  
    const handleSearch = () => {
      navigate("/trainTable", { state: { destination, date, options } });
    };
  
    return (

// .................................... Header ..............................................

      <div>
        <Navbar />
      <div className="Trains">
        <div
          className={
            type === "list" ? "theaderContainer listMode" : "theaderContainer"
          }
        >
          <div className="theaderList">
            <div className="theaderListItem stays">
              <FontAwesomeIcon icon={faBed} />
              <Link className="theaderStays" to="/" style={{ textDecoration: 'none', color: 'white' }}> stays </Link>
            </div>
            <div className="theaderListItem flights">
              <FontAwesomeIcon icon={faPlane} />
              <Link className="theaderFlights" to="/flights" style={{ textDecoration: 'none', color: 'white' }}> flights </Link>
            </div>
            <div className="theaderListItem trains">
              <FontAwesomeIcon icon={faTrain} />
              <Link className="theaderTrains" to="/trains" style={{ textDecoration: 'none', color: 'white' }}> trains </Link>
            </div>
            <div className="theaderListItem profile">
              <FontAwesomeIcon icon={faUserPen} />
              <Link className="theaderPro" to="/profile" style={{ textDecoration: 'none', color: 'white' }}> my profile </Link>
            </div>
            <div className="theaderListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div>
          {type !== "list" && (
            <>
              <h1 className="theaderTitle">
                A lifetime of discounts? It's Genius.
              </h1>
              <p className="theaderDesc">
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free Lamabooking account
              </p>
              <div className="theaderSearch">                
                <div className="theaderSearchItem">
                  <FontAwesomeIcon icon={faTrainSubway} className="theaderIcon" />
                  <input
                    type="text"
                    placeholder="Where from?"
                    className="theaderSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                  <FontAwesomeIcon icon={faArrowRight} className="theaderIcon" />
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="theaderSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>                
                <div className="theaderSearchItem">
                  <FontAwesomeIcon icon={faCalendarDays} className="theaderIcon" />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="theaderSearchText"
                  >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="tdate"
                      minDate={new Date()}
                    />
                  )}
                </div>
                <div className="theaderSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="theaderIcon" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="theaderSearchText"
                  >{`${options.adult} adult · ${options.children} children`}</span>
                  {openOptions && (
                    <div className="toptions">
                      <div className="toptionItem">
                        <span className="toptionText">Adult</span>
                        <div className="toptionCounter">
                          <button
                            disabled={options.adult <= 1}
                            className="toptionCounterButton"
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="toptionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="toptionCounterButton"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="toptionItem">
                        <span className="toptionText">Children</span>
                        <div className="toptionCounter">
                          <button
                            disabled={options.children <= 0}
                            className="toptionCounterButton"
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="toptionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="toptionCounterButton"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="theaderSearchItem">
                  <button className="theaderBtn" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

{/* ..................................... Items ........................................... */}

      </div>
        <div className="trainsContainer">
            <h1 className="trainsTitle">Popular train rides on Europe</h1>
            <span className="trainsDetails">Traveling without any trade-offs: <br></br>These routes in Europe are faster on the ground than by plane</span>
            <TrainFeatures/>
            <h1 className="trainsTitle">Trending cities</h1>
            <span className="trainsDetails">Book train rides to a destination popular with travelers from Europe</span>
            <TrainFeatures2/>
            <MailList/>
            <Footer/>
        </div>
      </div>

    );
  };
  
  export default Trains;
  