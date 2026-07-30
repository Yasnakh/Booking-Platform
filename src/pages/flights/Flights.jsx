import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
    faPlaneArrival,
    faPlaneDeparture,
    faTrain,
    faUserPen,
  } from "@fortawesome/free-solid-svg-icons";
  import Footer from "../../components/footer/Footer";
  import MailList from "../../components/mailList/MailList";
  import Navbar from "../../components/navbar/Navbar";
  import FlightFeatures from "../../components/flightFeatures/FlightFeatures";
  import FlightFeatures2 from "../../components/flightFeatures/FlightFeatures2";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { DateRange } from "react-date-range";
  import { useState } from "react";
  import { format } from "date-fns";
  import { useNavigate } from "react-router-dom";
  import { Link, NavLink } from 'react-router-dom';
  import "./flights.css";
  import "react-date-range/dist/styles.css";
  import "react-date-range/dist/theme/default.css"; 

  
  const Flights = ({ type }) => {

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
      navigate("/flightTable", { state: { destination, date, options } });
    };
  
    return (

// .............................. header .....................................

      <div>
        <Navbar />
      <div className="Flights">
        <div
          className={
            type === "list" ? "fheaderContainer listMode" : "fheaderContainer"
          }
        >
          <div className="fheaderList">
            <div className="fheaderListItem stays">
              <FontAwesomeIcon icon={faBed} />
              <Link className="fheaderStays" to="/" style={{ textDecoration: 'none', color: 'white' }}> stays </Link>
            </div>
            <div className="fheaderListItem flights">
              <FontAwesomeIcon icon={faPlane} />
              <Link className="fheaderFlights" to="/flights" style={{ textDecoration: 'none', color: 'white' }}> flights </Link>
            </div>
            <div className="fheaderListItem trains">
              <FontAwesomeIcon icon={faTrain} />
              <Link className="fheaderTrains" to="/trains" style={{ textDecoration: 'none', color: 'white' }}> trains </Link>
            </div>
            <div className="fheaderListItem profile">
              <FontAwesomeIcon icon={faUserPen} />
              <Link className="fheaderPro" to="/profile" style={{ textDecoration: 'none', color: 'white' }}> my profile </Link>
            </div>
            <div className="fheaderListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div>
          {type !== "list" && (
            <>
              <h1 className="fheaderTitle">
                A lifetime of discounts? It's Genius.
              </h1>
              <p className="fheaderDesc">
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free Lamabooking account
              </p>
              <div className="fheaderSearch">                
                <div className="fheaderSearchItem">
                  <FontAwesomeIcon icon={faPlaneDeparture} className="fheaderIcon" />
                  <input
                    type="text"
                    placeholder="Where from?"
                    className="fheaderSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                  <FontAwesomeIcon icon={faPlaneArrival} className="fheaderIcon" />
                   <input
                    type="text"
                    placeholder="Where to?"
                    className="fheaderSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>               
                <div className="fheaderSearchItem">
                  <FontAwesomeIcon icon={faCalendarDays} className="fheaderIcon" />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="fheaderSearchText"
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
                      className="fdate"
                      minDate={new Date()}
                    />
                  )}
                </div>
                <div className="fheaderSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="fheaderIcon" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="fheaderSearchText"
                  >{`${options.adult} adult · ${options.children} children`}</span>
                  {openOptions && (
                    <div className="foptions">
                      <div className="foptionItem">
                        <span className="foptionText">Adult</span>
                        <div className="foptionCounter">
                          <button
                            disabled={options.adult <= 1}
                            className="foptionCounterButton"
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="foptionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="foptionCounterButton"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="foptionItem">
                        <span className="foptionText">Children</span>
                        <div className="foptionCounter">
                          <button
                            disabled={options.children <= 0}
                            className="foptionCounterButton"
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="foptionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="foptionCounterButton"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="fheaderSearchItem">
                  <button className="fheaderBtn" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

{/* .................................... Features ............................................ */}

        <div className="flightsContainer">
            <h1 className="flightsTitle">Popular flights on Europe</h1>
            <span className="flightsDetails">Find deals on domestic and international flights</span>
            <FlightFeatures/>
            <h1 className="flightsTitle">Trending cities</h1>
            <span className="flightsDetails">Book flights to a destination popular with travelers from Europe</span>
            <FlightFeatures2/>
            <MailList/>
            <Footer/>
        </div>
        
      </div>
    );
  };
  
  export default Flights;
  