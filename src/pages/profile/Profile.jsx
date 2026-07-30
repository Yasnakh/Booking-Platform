import {
    faBed,
    faCar,
    faPlane,
    faTaxi,
    faTrain,
    faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./profile.css";
import ProfileInput from "../../components/profileInput/ProfileInput";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { Link, NavLink } from 'react-router-dom';


const Profile = ({ type }) => {

  const [values, setValues] = useState({
    phoneNumber: "",
    email: "",
    name: "",
    lastName: "",
    birthday: "",
  });

  const inputs = [
    {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Name",
    errorMessage: "Name should be atleast 3 characters and shouldn't include any special character!",
    label: "Name",
    pattern: "^[A-Za-z]{3,16}$",
    required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "Last Name should be atleast 3 characters and shouldn't include any special character!",
      label: "Last Name",
      pattern: "^[A-Za-z]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "tel",
      placeholder: "Phone Number",
      errorMessage:
        "It should be a valid phone number!",
      label: "Phone Number",
      pattern: "^(\\+98|0)?9\\d{9}$",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern: "^[^@\\s]+@[^@\\s]+\.[^@\\s]+$",
      required: true,
    },
    {
      id: 5,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      required: true,
    },
    {
      id: 6,
      name: "address",
      type: "text",
      placeholder: "Address",
      label: "Address",
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
                <div className="pheaderListItem stays">
                    <FontAwesomeIcon icon={faBed} />
                    <Link className="headerStays" to="/" style={{ textDecoration: 'none', color: 'white' }}> stays </Link>
                </div>
                <div className="pheaderListItem flights">
                    <FontAwesomeIcon icon={faPlane} />
                    <Link className="headerFlights" to="/flights" style={{ textDecoration: 'none', color: 'white' }}> flights </Link>
                </div>
                <div className="pheaderListItem trains">
                    <FontAwesomeIcon icon={faTrain} />
                    <Link className="headerTrains" to="/trains" style={{ textDecoration: 'none', color: 'white' }}> trains </Link>
                </div>
                <div className="pheaderListItem profile">
                    <FontAwesomeIcon icon={faUserPen} />
                    <Link className="headerPro" to="/profile" style={{ textDecoration: 'none', color: 'white' }}> my profile </Link>
                </div>
                <div className="pheaderListItem">
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

{/* ............................... Profile Form ............................................*/}

        <div className="MyProfile">
        <form className="proForm" onSubmit={handleSubmit}>
            <h1 className="proH1">My Profile</h1>
            {inputs.map((input) => (
            <ProfileInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
            />
            ))}
            <button className="proButton">Update</button>
        </form>
        </div>
          <MailList/>
          <div className="footer">
            <Footer/>
          </div>
    </div>
  );
};

export default Profile;
