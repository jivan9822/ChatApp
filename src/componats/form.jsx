import { useState } from "react";
import "./form.css";
const LoginForm = () => {
  const [data, setData] = useState({});
  const onClickHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name);
    console.log(e.target.value);
    setData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };
  //   console.log(data);
  return (
    <div>
      <div className="toast-container">
        <form>
          <h2>CHAT ROOM</h2>
          <div className="toast-container">
            <input
              name="name"
              onChange={onChangeHandler}
              type="text"
              placeholder="Your name"
            />
            <select name="room" onChange={onChangeHandler}>
              <option>Open this select menu</option>
              <option>Room-1</option>
              <option>Room-2</option>
              <option>Room-3</option>
            </select>
          </div>
          <button onClick={onClickHandler}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
