import {
    faBed,
    faPlane,
    faTaxi,
    faTrain,
    faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./login.css";
import LoginInput from "../../components/loginInput/LoginInput";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { Link, Navigate} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = ({ type }) => {

  const [values, setValues] = useState({
    phoneNumberOrEmail: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "phoneNumberOrEmail",
      type: "text",
      placeholder: "Phone Number or Email",
      errorMessage:
        "Phone Number or Email is not valid!",
      label: "Phone Number or Email",
      phonePattern: "^(\\+98|0)?9\\d{9}$",
      emailPattern: "^[^@\\s]+@[^@\\s]+\.[^@\\s]+$",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
      "Password should contain at least 1 letter, 1 number, and 1 special character, and a minimum length of 8 characters!",
      label: "Password",
      pattern: "^(?=.*\\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()])[a-zA-Z\\d!@#$%^&*()]{8,}$",
      required: true,
    },
  ];

  const navigate = useNavigate();

  const handleLog = (phoneNumberOrEmail, password) => {
    axios.post('http://127.0.0.1:8000/api/users/login/', {phoneNumberOrEmail, password})
      .then(response => {
        console.log('Response:', response);
        navigate("/");
      })
      .catch(error => {
        console.error('Error:', error);
        navigate("/flights");
      });
  };
  

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
                <div className="lheaderListItem stays">
                    <FontAwesomeIcon icon={faBed} />
                    <Link className="headerStays" to="/" style={{ textDecoration: 'none', color: 'white' }}> stays </Link>
                </div>
                <div className="lheaderListItem flights">
                    <FontAwesomeIcon icon={faPlane} />
                    <Link className="headerFlights" to="/flights" style={{ textDecoration: 'none', color: 'white' }}> flights </Link>
                </div>
                <div className="lheaderListItem trains">
                    <FontAwesomeIcon icon={faTrain} />
                    <Link className="headerTrains" to="/trains" style={{ textDecoration: 'none', color: 'white' }}> trains </Link>
                </div>
                <div className="lheaderListItem profile">
                    <FontAwesomeIcon icon={faUserPen} />
                    <Link className="headerPro" to="/profile" style={{ textDecoration: 'none', color: 'white' }}> my profile </Link>
                </div>
                <div className="lheaderListItem">
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

{/* ................................ LogIn Form ...................................... */}

        <div className="Login">
        <form className="logForm" onSubmit={handleSubmit}>
            <h1 className="logH1">Log In</h1>
            {inputs.map((input) => (
            <LoginInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
            />
            ))}
            <span className="logSpan"> don't have an account?&nbsp;
            <Link className="logLink" to="/register" style={{ fontSize: '13px', color: 'black', textAlign: 'center' }}>Sign Up</Link>
            </span>
            <button className="logButton" onClick={handleLog}>Submit</button>
        </form>
        </div>
        <MailList/>
        <div className="footer">
          <Footer/>
        </div>
    </div>
  );
};

export default Login;
