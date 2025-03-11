import { useState } from "react";
import AppContainedButton from "../../components/AppContainedButton";
import AppTextButton from "../../components/AppTextButton";
import AppTextFiled from "../../components/AppTextField";
import "./styles.css";
import { useNavigate } from "react-router-dom";

interface IUserData {
  email: string;
  password: string;
}

function SignIn() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<IUserData>({
    email: "",
    password: "",
  });

  function onUserDataUpdate(key: string, event: any) {
    setUserData({
      ...userData,
      [key]: event.target.value,
    });
  }

  function onCreateAccountClick() {
    navigate("/sign-up");
  }

  return (
    <div className="container">
      <div className="inputsContainer">
        <AppTextFiled
          fullWidth
          type="email"
          placeholder="Email"
          onChange={(event) => onUserDataUpdate("email", event)}
          value={userData.email}
        />
        <AppTextFiled
          fullWidth
          type="password"
          placeholder="Password"
          onChange={(event) => onUserDataUpdate("password", event)}
          value={userData.password}
        />
      </div>
      <div className="buttonsContainer">
        <AppTextButton onClick={onCreateAccountClick}>
          Create Account
        </AppTextButton>
        <AppContainedButton>Submit</AppContainedButton>
      </div>
    </div>
  );
}

export default SignIn;
