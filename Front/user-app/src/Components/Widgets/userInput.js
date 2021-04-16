import { UserBox } from "../../Styles/userFormStyles";

const UserInput = (props) => {
  const { loginData, setValue, type } = props;

  const addValue = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <UserBox className="user-box">
      {/* <input type={type} onChange={(e) => setValue(e.target.value)} /> */}
      <input type={type} onChange={(e) => addValue(e)} />
      <label>{loginData} </label>
    </UserBox>
  );
};

export default UserInput;
