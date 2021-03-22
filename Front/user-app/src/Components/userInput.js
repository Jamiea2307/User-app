import { UserBox } from "../Styles/userFormStyles";

const UserInput = (props) => {
  const { loginData, setValue, type } = props;

  return (
    <UserBox className="user-box">
      <input type={type} onChange={(e) => setValue(e.target.value)} />
      <label>{loginData} </label>
    </UserBox>
  );
};

export default UserInput;
