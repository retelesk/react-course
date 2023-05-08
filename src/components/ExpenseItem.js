import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  console.log("ExpenseItem", props);
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__ description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
