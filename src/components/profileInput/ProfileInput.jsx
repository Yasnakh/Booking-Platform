import { useState } from "react";
import "./profileInput.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';


const ProInput = (props) => {

  const [focused, setFocused] = useState(false);

  const { label, errorMessage, onChange, id, ...inputProps } = props;
  
  const handleChange = (event) => {

    setFocused(true);
    if (onChange) {
      onChange(event);
    }
    
    const inputValue = event.target.value;
 
    if (inputValue && !inputValue.match(inputProps.pattern)) {
      showErrorMessage(errorMessage);
    }

  };

  const showErrorMessage = (errorMessage) => {
    toast.error(errorMessage);
  };

  return (
    <div className="proInput">
      <label className="prolabel">{label}</label>   
      <input className="proBlock"
        {...inputProps}
        onChange={onChange}
        onBlur={handleChange}
        focused={focused.toString()}     
      />
      <ToastContainer className="toast-container"/>
    </div>
  );
};

export default ProInput;


