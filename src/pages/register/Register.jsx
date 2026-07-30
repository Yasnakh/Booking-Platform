import {
    faBed,
    faCar,
    faPlane,
    faTaxi,
    faTrain,
    faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./register.css";
import RegisterInput from "../../components/registerInput/RegisterInput";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { Link, NavLink } from 'react-router-dom';


const Register = ({ type }) => {

  const [values, setValues] = useState({
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "phoneNumber",
      type: "tel",
      placeholder: "Phone Number",
      errorMessage:
        "Phone Number should be atleast 11 digits and shouldn't include any other character!",
      label: "Phone Number",
      pattern: "^(\\+98|0)?9\\d{9}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern: "^[^@\\s]+@[^@\\s]+\.[^@\\s]+$",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should contain at least 1 letter, 1 number, and 1 special character, and a minimum length of 8 characters!",
      label: "Password",
      pattern: "^(?=.*\\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()])[a-zA-Z\\d!@#$%^&*()]{8,}$",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
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
                <div className="rheaderListItem stays">
                    <FontAwesomeIcon icon={faBed} />
                    <Link className="headerStays" to="/" style={{ textDecoration: 'none', color: 'white' }}> stays </Link>
                </div>
                <div className="rheaderListItem flights">
                    <FontAwesomeIcon icon={faPlane} />
                    <Link className="headerFlights" to="/flights" style={{ textDecoration: 'none', color: 'white' }}> flights </Link>
                </div>
                <div className="rheaderListItem trains">
                    <FontAwesomeIcon icon={faTrain} />
                    <Link className="headerTrains" to="/trains" style={{ textDecoration: 'none', color: 'white' }}> trains </Link>
                </div>
                <div className="rheaderListItem profile">
                    <FontAwesomeIcon icon={faUserPen} />
                    <Link className="headerPro" to="/profile" style={{ textDecoration: 'none', color: 'white' }}> my profile </Link>
                </div>
                <div className="rheaderListItem">
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

{/* ................................... Register Form ......................................... */}

        <div className="Register">
        <form className="regForm" onSubmit={handleSubmit}>
            <h1 className="regH1">Register</h1>
            {inputs.map((input) => (
            <RegisterInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
            />
            ))}
            <span className="regSpan"> already have an account?&nbsp;
            <Link className="regLink" to="/login" style={{ fontSize: '13px', color: 'black', textAlign: 'center' }}>Log In</Link>
            </span>
            <button className="regButton">Submit</button>
        </form>
        </div>
        <MailList/>
        <div className="footer">
            <Footer/>
        </div>
    </div>
  );
};

export default Register;
