import { useState } from "react";
import "./formInput.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';


const FormInput = (props) => {

  const [focused, setFocused] = useState(false);
  
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleChange = (event) => {

    setFocused(true);

    if (onChange) {
      onChange(event);
    }

    const inputValue = event.target.value;
    if(!inputValue) {
      toast.error('This field cannot be Empty');
    }

    else if (!inputValue.match(inputProps.pattern)) {
      showErrorMessage(errorMessage);
    }

  };

  const showErrorMessage = (errorMessage) => {
    toast.error(errorMessage);
  };

  return (
    <div className="formInput">
      <label className="formlabel">{label}</label>   
      <input className="formBlock"
        {...inputProps}
        onChange={onChange}
        onBlur={handleChange}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}       
      />
      <ToastContainer className="toast-container"/>
    </div>
  );
};

export default FormInput;


