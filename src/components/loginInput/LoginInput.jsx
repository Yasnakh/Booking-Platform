import { useState } from "react";
import "./loginInput.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

const LogInput = (props) => {

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

    else if(inputProps.id !== 2){
        if(!inputValue.match(inputProps.phonePattern) && !inputValue.match(inputProps.emailPattern))
            showErrorMessage(errorMessage);
    }
    
  };

  const showErrorMessage = (errorMessage) => {
    toast.error(errorMessage);
  };

  return (
    <div className="logInput">
      <label className="loglabel">{label}</label>   
      <input className="logBlock"
        {...inputProps}
        onChange={onChange}
        onBlur={handleChange}
        focused={focused.toString()}
      />
      <ToastContainer className="toast-container"/>
    </div>
  );
};

export default LogInput;


