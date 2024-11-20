import classes from "./Input.module.css";
import { useState } from "react";
const Input = (props) => {
  const [number, setNumber] = useState(1); // State to hold the number value

  const handleChange = (event) => {
    const currentValue = event.target.value; // Get the current input value
    setNumber(+currentValue); // Update state
    console.log("Number of meal: " + currentValue); // Use the latest value
    props.onChange(currentValue); // Pass the latest value to parent
  };

  // const handleSubmit = () => {
  //   console.log("Number submitted:", number); // Use the number value

  // };
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} onChange={handleChange} value={number} />
    </div>
  );
};
export default Input;
