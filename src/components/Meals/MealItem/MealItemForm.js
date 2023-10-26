import { useRef, useState } from "react";
import Input from "../../../components/UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amoutIsValid, setAmoutIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmout = amountInputRef.current.value;
    const enteredAmoutAsNum = +enteredAmout;

    if (
      enteredAmout.trim().length === 0 ||
      enteredAmoutAsNum < 1 ||
      enteredAmoutAsNum > 5
    ) {
      setAmoutIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmoutAsNum);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amout"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1"
        }}
      />
      <button>+add</button>
      {!amoutIsValid && <p>Please Enter a valid amout(1-5)</p>}
    </form>
  );
};

export default MealItemForm;
