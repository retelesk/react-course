import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseContainer.css";
const ExpenseContainer = function (props) {
  const propArr = Object.values(props).flat();
  return (
    <Card className="expenses">
      <ExpenseItem
        title={propArr[0].title}
        amount={propArr[0].amount}
        date={propArr[0].date}
      />
      <ExpenseItem
        title={propArr[1].title}
        amount={propArr[1].amount}
        date={propArr[1].date}
      />
      <ExpenseItem
        title={propArr[2].title}
        amount={propArr[2].amount}
        date={propArr[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={propArr[3].title}
        amount={propArr[3].amount}
        date={propArr[3].date}
      />
    </Card>
  );
};

export default ExpenseContainer;