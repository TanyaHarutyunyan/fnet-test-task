import { useState } from "react";
import AppContainedButton from "../../components/AppContainedButton";
import AppTextButton from "../../components/AppTextButton";
import AppTextField from "../../components/AppTextField";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import FormValidation from "../../models/formValidation";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import AuthFormHeader from "../../components/auth-fom-header";
import Header from "../../components/header";
import resources from "../../translations";
import { FormDataType, FormErrorType } from "../../types";
import withHeader from "../../HOC/withHeader";

function SignIn() {
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.users.users);
  const [formData, setFormData] = useState<FormDataType>({
    email: null,
    password: null,
  });
  const [formErrors, setFormErrors] = useState<FormErrorType>({
    email: null,
    password: null,
  });
  const selectedLanguage = useSelector(
    (state: RootState) => state.settings.language,
  );
  const formValidation = new FormValidation(formData, users, "sign-in");

  function onUserDataUpdate(key: string, event: any) {
    setFormData({
      ...formData,
      [key]: event.target.value || null,
    });
  }

  function validateForm() {
    if (formValidation.isFormValid()) {
      navigate("/");
    } else {
      setFormErrors({
        ...formErrors,
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

  function getLocalizationText(key: string) {
    return resources[selectedLanguage][key];
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <AuthFormHeader
          title={getLocalizationText("sign_in")}
          description={getLocalizationText("sign_in_description")}
        />
        <div className={styles.inputs}>
          <AppTextField
            error={formErrors.email !== null}
            fullWidth
            label={getLocalizationText(formErrors.email || "email")}
            type="email"
            onChange={(event) => onUserDataUpdate("email", event)}
            value={formData.email}
          />
          <AppTextField
            error={formErrors.password !== null}
            fullWidth
            label={getLocalizationText(formErrors.password || "password")}
            type="password"
            onChange={(event) => onUserDataUpdate("password", event)}
            value={formData.password}
          />
        </div>
        <div className={styles.buttons}>
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

export default withHeader(SignIn);
