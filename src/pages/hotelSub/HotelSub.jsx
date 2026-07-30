import {
    faBed,
    faPlane,
    faTaxi,
    faTrain,
    faUserPen,
  } from "@fortawesome/free-solid-svg-icons";
  import { useState } from "react";
  import "./hotelSub.css";
  import Footer from "../../components/footer/Footer";
  import MailList from "../../components/mailList/MailList";
  import Navbar from "../../components/navbar/Navbar";
  import FormInput from "../../components/formInput/FormInput";
  import DropDown from "../../components/dropDown/DropDown";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "react-date-range/dist/styles.css"; 
  import "react-date-range/dist/theme/default.css"; 
  import { useNavigate } from "react-router-dom";
  import { Link, NavLink } from 'react-router-dom';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  
  const HotelSub = ({ type }) => {

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
      phoneNumber: "",
    });  
  
    const inputs = [
      {
        id: 1,
        name: "name",
        type: "text",
        placeholder: "Name",
        errorMessage:
          "Name should be atleast 3 characters and shouldn't include any special character!",
        label: "Name",
        pattern: "^[A-Za-z]{3,16}$",
        required: true,
      },
      {
        id: 2,
        name: "lastName",
        type: "text",
        placeholder: "Last Name",
        errorMessage:
          "LastName should be atleast 3 characters and shouldn't include any special character!",
        label: "Last Name",
        pattern: "^[A-Za-z]{3,16}$",
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

    const navigate = useNavigate();

    const handleButton = () => {
      navigate("/");
    };
  
    
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  

    return (
// .................................. Header .................................................

      <div>
        <Navbar />
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          <div className="headerList">
            <div className="headerListItem stays">
              <FontAwesomeIcon icon={faBed} />
              <Link className="headerStays" to="/" style={{ textDecoration: 'none', color: 'white' }}> stays </Link>
            </div>
            <div className="headerListItem flights">
              <FontAwesomeIcon icon={faPlane} />
              <Link className="headerFlights" to="/flights" style={{ textDecoration: 'none', color: 'white' }}> flights </Link>
            </div>
            <div className="headerListItem trains">
              <FontAwesomeIcon icon={faTrain} />
              <Link className="headerTrains" to="/trains" style={{ textDecoration: 'none', color: 'white' }}> trains </Link>
            </div>
            <div className="headerListItem profile">
              <FontAwesomeIcon icon={faUserPen} />
              <Link className="headerPro" to="/profile" style={{ textDecoration: 'none', color: 'white' }}> my profile </Link>
            </div>
            <div className="headerListItem">
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
            <div className="HotelSub">
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
                  <p className="pDropdown">Select your gender: {selectedOption}</p>
                  <DropDown options={dOptions} onSelect={handleSelect} />
                </div>
                <button className="subButton" onClick={handleButton}>Reserve Your Room</button>
                <ToastContainer />
              </form>
            </div>
            <MailList/>
            <Footer/>
        </div>     
      </div>
    );
  };
  
  export default HotelSub;
  
  