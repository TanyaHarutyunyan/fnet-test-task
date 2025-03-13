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
import Header from "../../components/header";
import resources from "../../translations";

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
  const selectedLanguage = useSelector(
    (state: RootState) => state.settings.language,
  );
  const formValidation = new FormValidation(userData, users, "sign-in");

  function onUserDataUpdate(key: string, event: any) {
    setUserData({
      ...userData,
      [key]: event.target.value || null,
    });
  }

  function validateForm() {
    if (formValidation.isFormValid()) {
      navigate("/");
    } else {
      setErrors({
        ...errors,
        email: formValidation.emailValidationError(),
        password: formValidation.passwordValidationError(),
      });
    }
  }

  function onSubmitClick() {
    validateForm();
  }

  function onCreateAccountClick() {
    navigate("/sign-up");
  }

  function getLocalizationText(key: any) {
    return resources[selectedLanguage][key];
  }

  return (
    <div className="root">
      <Header />
      <div className="container">
        <AuthHeader
          title={getLocalizationText("sign_in")}
          description={getLocalizationText("sign_in_description")}
        />
        <div className="inputsContainer">
          <AppTextFiled
            error={errors.email !== null}
            fullWidth
            label={getLocalizationText(errors.email || "email")}
            type="email"
            onChange={(event) => onUserDataUpdate("email", event)}
            value={userData.email}
          />
          <AppTextFiled
            error={errors.password !== null}
            fullWidth
            label={getLocalizationText(errors.password || "password")}
            type="password"
            onChange={(event) => onUserDataUpdate("password", event)}
            value={userData.password}
          />
        </div>
        <div className="buttonsContainer">
          <AppTextButton onClick={onCreateAccountClick}>
            {getLocalizationText("create_account")}
          </AppTextButton>
          <AppContainedButton onClick={onSubmitClick}>
            {getLocalizationText("submit")}
          </AppContainedButton>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
