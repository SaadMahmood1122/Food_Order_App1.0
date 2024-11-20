import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import React, { useState, useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const [itemAmt, setItemAmt] = useState(1); // Initialize state for the amount
  const ctx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();

    // Ensure itemAmt is a valid number
    const amount = +itemAmt; // Convert string to number
    if (amount < 1 || amount > 5) {
      alert("Please enter a valid amount (1-5).");
      return;
    }

    // Push item to cart context
    ctx.items.push({
      name: props.name,
      price: props.price,
      description: props.description,
      itemAmt: amount,
    });

    // Update total amount in context
    ctx.totalAmount = ctx.totalAmount + props.price * amount;

    // Optionally reset the input field
    setItemAmt(1);
    console.log(ctx);
  };

  const handleInput = (number) => {
    setItemAmt(number); // Update state with input value
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label={"Amount"}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          value: itemAmt, // Bind input to state
        }}
        onChange={handleInput} // Use onChange for input updates
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
