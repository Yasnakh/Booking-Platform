import {
  faBed,
  faPlane,
  faTaxi,
  faTrain,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./flightSub.css";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import FormInput from "../../components/formInput/FormInput";
import DropDown from "../../components/dropDown/DropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from 'react-router-dom';
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 


const FlightSub = ({ type }) => {

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (value) => {
    setSelectedOption(value);
  };

  const dOptions = [
    { label: "Female", value: "Female" },
    { label: "Male", value: "Male" },
  ];
  
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    birthday: "",
    nationalCode: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      label: "Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage:
        "Last Name should be 3-16 characters and shouldn't include any special character!",
      label: "Last Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "nationalCode",
      type: "number",
      placeholder: "National Code",
      errorMessage:
        "national code should have a maximum of 10 digits!",
      label: "National Code",
      pattern: "^[0-9]{2,10}$",
      required: true,
    },
    {
      id: 5,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern: "^[^@\\s]+@[^@\\s]+\.[^@\\s]+$",
      required: true,
    },
    {
      id: 6,
      name: "phoneNumber",
      type: "tel",
      placeholder: "Phone Number",
      errorMessage: "It should be a valid phone number!",
      label: "Phone Number",
      pattern: "^(\\+98|0)?9\\d{9}$",
      required: true,
    },

  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    
// .................................... Header .........................................

    <div>
      <Navbar />
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="fheaderListItem stays">
            <FontAwesomeIcon icon={faBed} />
            <Link className="headerStays" to="/" style={{ textDecoration: 'none', color: 'white' }}> stays </Link>
          </div>
          <div className="fheaderListItem flights">
            <FontAwesomeIcon icon={faPlane} />
            <Link className="headerFlights" to="/flights" style={{ textDecoration: 'none', color: 'white' }}> flights </Link>
          </div>
          <div className="fheaderListItem trains">
            <FontAwesomeIcon icon={faTrain} />
            <Link className="headerTrains" to="/trains" style={{ textDecoration: 'none', color: 'white' }}> trains </Link>
          </div>
          <div className="fheaderListItem profile">
            <FontAwesomeIcon icon={faUserPen} />
            <Link className="headerPro" to="/profile" style={{ textDecoration: 'none', color: 'white' }}> my profile </Link>
          </div>
          <div className="fheaderListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
          </>
        )}
      </div>
    </div>


{/* ................................. Item ........................................ */}


      <div className="homeContainer">
        <span className="flightTitle"> 
        Go Flight <FontAwesomeIcon icon={faPlane} style={{color: "#b4b5b7",}} />
        </span>
          <div className="fSearchItem">
            <div className="fDesc">
              <h1 className="fTitle">7:25 AM</h1>
              <span className="fDistance">ZURICH . JUL 29</span>
              <span className="fAirport">
              Transavia Airlines, 
              Swiss
              </span>                  
            </div>
            <div class="fhr">
              <p className="fp1">4h 50m</p>                            
            </div>
            <div className="fDesc">
              <h1 className="fTitle">12:15 PM</h1>
              <span className="fDistance">BRUSSELS . JUL 29</span>
              <span className="fAirport"></span>
            </div>
            <div className="flightDetails">
              <span className="fPersonalDet"> <small>Gate :</small> <b>A3</b> </span>
              <span className="flightNo">Flight Number:</span>
              <span className="fRating">CHF 210,08</span>
              <span className="fPersonalDet"> <small>Seat :</small> <b>18C</b> </span>
              <span className="ftotalprice">Permissible aircraft load: <b>25KG</b></span>
            </div>
          </div>
          <span className="flightTitle">
          <FontAwesomeIcon icon={faPlane} rotation={180} style={{color: "#b4b5b7",}} /> Return Flight
          </span>
          <div className="fSearchItem">
            <div className="fDesc">
              <h1 className="fTitle">3:12 PM</h1>
              <span className="fDistance">BRUSSELS . AUG 5</span>
              <span className="fAirport">
              Condor, Transavia Airlines
              </span >   
            </div>
            <div class="fhr">
              <p className="fp1">4h 48m</p>
            </div>
            <div className="fDesc">
              <h1 className="fTitle">8:00 PM</h1>
              <span className="fDistance">ZURICH . AUG 5 </span>
              <span className="fCancelOpSubtitle">
              </span>
            </div>
            <div className="flightDetails">
              {/* <span className="gateNo"></span> */}
              <span className="fPersonalDet"> <small>Gate :</small> <b>A2</b> </span>              
              <span className="flightNo">Flight Number:</span>
              <span className="fRating">CHF 750, 17</span>
              <span className="fPersonalDet"> <small>Seat :</small> <b>22D</b> </span>
              <span className="ftotalprice">Permissible aircraft load: <b>25KG</b></span>
            </div>
          </div>

{/* ................................. Form ........................................ */}

          <div className="FlightSub">
            <form className="formSub" onSubmit={handleSubmit}>
              <h1 className="formH">Fill Out The Form</h1>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />   
              ))}
              <div >
                <p className="fpDropdown">Select your gender: {selectedOption}</p>
                <DropDown options={dOptions} onSelect={handleSelect} />
              </div>
              <button className="fsubButton">Reserve Seat</button>
            </form>
          </div>
          <MailList/>
          <Footer/>
      </div>     
    </div>
  );
};

export default FlightSub;

