import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = function (props) {
  console.log("ExpenseItem", props);
  const clickHandler=()=>{
      console.log('Clickeddd');
      title='Updated';
  };
  let title=props.title;
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__ description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
export default ExpenseItem;
