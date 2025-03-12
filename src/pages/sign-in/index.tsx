import { useState } from "react";
import AppContainedButton from "../../components/AppContainedButton";
import AppTextButton from "../../components/AppTextButton";
import AppTextFiled from "../../components/AppTextField";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import FormValidation from "../../models/formValidation";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import AuthHeader from "../../components/auth-header";

interface IUserData {
  email: string | null;
  password: string | null;
}

function SignIn() {
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.users);
  const [userData, setUserData] = useState<IUserData>({
    email: null,
    password: null,
  });
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({
    email: null,
    password: null,
  });
  const formValidation = new FormValidation(userData, users, "sign-in");

  function onUserDataUpdate(key: string, event: any) {
    setUserData({
      ...userData,
      [key]: event.target.value,
    });
  }

  function validateForm() {
    if (formValidation.isFormValid()) {
      navigate("/");
    } else {
      setErrors({
        ...errors,
        email: formValidation.emailValidation(),
        password: formValidation.passwordValidation(),
      });
    }
  }

  function onSubmitClick() {
    validateForm();
  }

  function onCreateAccountClick() {
    navigate("/sign-up");
  }

  return (
    <div className="root">
      <div className="container">
        <AuthHeader title="Sign In" description="Welcome Back!" />
        <div className="inputsContainer">
          <AppTextFiled
            error={errors.email !== null}
            fullWidth
            label={errors.email || "Email"}
            type="email"
            onChange={(event) => onUserDataUpdate("email", event)}
            value={userData.email}
          />
          <AppTextFiled
            error={errors.password !== null}
            fullWidth
            label={errors.password || "Password"}
            type="password"
            onChange={(event) => onUserDataUpdate("password", event)}
            value={userData.password}
          />
        </div>
        <div className="buttonsContainer">
          <AppTextButton onClick={onCreateAccountClick}>
            Create Account
          </AppTextButton>
          <AppContainedButton onClick={onSubmitClick}>
            Submit
          </AppContainedButton>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
