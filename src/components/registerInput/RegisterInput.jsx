import { useState } from "react";
import "./registerInput.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';


const RegInput = (props) => {

  const [focused, setFocused] = useState(false);

  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const [passStrength, setpassStrength] = useState('');
  
  const handleChange = (event) => {

    const inputValue = event.target.value;

    if (onChange) {
      onChange(event);
    }
    
    if(!inputValue) {
      setFocused(true);
      toast.error('This field cannot be Empty');
      setpassStrength('');
    }

    else if (!inputValue.match(inputProps.pattern)) {
      setFocused(true);
      showErrorMessage(errorMessage);
      if(inputProps.name === "password"){

        if(inputValue.match(/\d/)){
          setpassStrength('weak');
        }
        if(inputValue.match(/[A-Za-z]/)){
          setpassStrength('Moderate');
        }
      }
    }

    else if(inputValue.match(inputProps.pattern)){
        setFocused(false);
        if(inputProps.name === "password"){
          if (inputValue.match(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*]{8,8}$/))
            setpassStrength('Strong');
          if (inputValue.match(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*]{9,}$/))
            setpassStrength('Very Strong');
        }
    }
    
  };

  const showErrorMessage = (errorMessage) => {
    toast.error(errorMessage);
  };

  return (
    <div className="regInput">
      <label className="reglabel">{label}</label>   
      <input className="regBlock"
        {...inputProps}
        onChange={onChange}
        onBlur={handleChange}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
        
      />
      <ToastContainer className="toast-container"/>
      <span className="passStrength">{passStrength}</span>
    </div>
  );
};

export default RegInput;


