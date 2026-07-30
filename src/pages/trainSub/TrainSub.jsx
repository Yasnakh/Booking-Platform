import {
    faBed,
    faPlane,
    faTaxi,
    faTrain,
    faUserPen,
    faTrainSubway,
  } from "@fortawesome/free-solid-svg-icons";
  import { useState } from "react";
  import Footer from "../../components/footer/Footer";
  import MailList from "../../components/mailList/MailList";
  import Navbar from "../../components/navbar/Navbar";
  import FormInput from "../../components/formInput/FormInput";
  import DropDown from "../../components/dropDown/DropDown";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { Link, NavLink } from 'react-router-dom';
  import "react-date-range/dist/styles.css"; 
  import "react-date-range/dist/theme/default.css"; 
  import "./trainSub.css";
  
  const TrainSub = ({ type }) => {

    const [selectedOption, setSelectedOption] = useState("");
  
    const handleSelect = (value) => {
      setSelectedOption(value);
    };
  
    const dOptions = [
      { label: "Female", value: "Female" },
      { label: "Male", value: "Male" },
    ];
  
    const [options, setOptions] = useState({
      adult: 1,
      children: 0,
      room: 1,
    });  

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
        errorMessage:
        "It should be a valid phone number!",
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
      <div>
        <Navbar />
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          <div className="headerList">
            <div className="theaderListItem stays">
              <FontAwesomeIcon icon={faBed} />
              <Link className="headerStays" to="/" style={{ textDecoration: 'none', color: 'white' }}> stays </Link>
            </div>
            <div className="theaderListItem flights">
              <FontAwesomeIcon icon={faPlane} />
              <Link className="headerFlights" to="/flights" style={{ textDecoration: 'none', color: 'white' }}> flights </Link>
            </div>
            <div className="theaderListItem trains">
              <FontAwesomeIcon icon={faTrain} />
              <Link className="headerTrains" to="/trains" style={{ textDecoration: 'none', color: 'white' }}> trains </Link>
            </div>
            <div className="theaderListItem profile">
              <FontAwesomeIcon icon={faUserPen} />
              <Link className="headerPro" to="/profile" style={{ textDecoration: 'none', color: 'white' }}> my profile </Link>
            </div>
            <div className="theaderListItem">
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
          <div className="tSearchItem">
            <div className="tDesc">
              <h1 className="tTitle">7:25 AM</h1>
              <span className="tDistance">ZURICH . JUL 29</span>
              <span className="tAirport">
              Zurich Hauptbahnhof rail station
              </span>                 
            </div>
            <div class="thr">
            <FontAwesomeIcon className="goTrain" icon={faTrainSubway} style={{color: "#b4b5b7",}} />
              <p className="tp1">4h 50m</p>                         
            </div>
            <div className="tDesc">
              <h1 className="tTitle">12:15 PM</h1>
              <span className="tDistance">INTERLAKEN . JUL 29</span>
              <span className="tAirport"></span>
            </div>
            <div className="trainDetails">
              <span className="tPersonalDet"> <small>Ticket type:</small> <b>ROUND TRIP</b> </span>
              <span className="trainNo">Train#:</span>
              <span className="tRating">114 - C</span>
              <span className="tPersonalDet"> <small>Seat :</small> <b>18C</b> </span>
              <span className="ttotalprice">Class: <b>EXECUTIVE</b></span>
            </div>
          </div>
          <div className="tSearchItem">
            <div className="tDesc">
              <h1 className="tTitle">3:12 PM</h1>
              <span className="tDistance">INTERLAKEN . AUG 5</span>              
              <span className="tAirport">              
              Interlaken Ost rail station              
              </span >                 
            </div>
            <div class="thr">
            <FontAwesomeIcon className="returnTrain" icon={faTrainSubway} style={{color: "#b4b5b7",}} />
              <p className="tp1">4h 48m</p>
            </div>
            <div className="tDesc">
              <h1 className="tTitle">8:00 PM</h1>
              <span className="tDistance">ZURICH . AUG 5 </span>
              <span className="tCancelOpSubtitle">
              </span>
            </div>
            <div className="trainDetails">
              <span className="tPersonalDet"> <small>Ticket type:</small> <b>RETURN</b> </span>              
              <span className="trainNo">Train#:</span>
              <span className="tRating">123 - A</span>
              <span className="tPersonalDet"> <small>Seat :</small> <b>22D</b> </span>
              <span className="ttotalprice">Class: <b>EXECUTIVE</b></span>
            </div>
          </div>
  
  
{/* ................................. Form ........................................ */}

  
            <div className="TrainSub">
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
                  <p className="tpDropdown">Select your gender: {selectedOption}</p>
                  <DropDown options={dOptions} onSelect={handleSelect} />
                </div>
                <button className="tsubButton">Reserve Seat</button>
              </form>
            </div>
            
            <MailList/>
            <Footer/>
        </div>     
      </div>
    );
  };
  
  export default TrainSub;
  
  