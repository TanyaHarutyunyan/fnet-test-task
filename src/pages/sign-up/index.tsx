import { useState } from "react";
import AppTextFiled from "../../components/AppTextField";
import "./styles.css";
import AppSelect from "../../components/AppSelect";
import AppMenuItem from "../../components/AppMenuItem";
import { Checkbox, FormControl } from "@mui/material";
import AppInputLabel from "../../components/AppInputLabel";
import AppMultiSelect from "../../components/AppMultiSelect";
import AppListItemText from "../../components/AppListItem";
import AppContainedButton from "../../components/AppContainedButton";
import AppTextButton from "../../components/AppTextButton";
import { useNavigate } from "react-router-dom";
import FormValidation from "../../models/formValidation";
import { addUser } from "../../redux/slices/userSlice/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import AuthHeader from "../../components/auth-header";
import Header from "../../components/header";
import resources from "../../translations";
import { FormDataType, FormErrorType } from "../../types";

const regions = ["Shirak", "Lori", "Tavush"];
const subjects = ["Math", "English", "History"];

function SignUp() {
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.users.users);
  const [formData, setFormData] = useState<FormDataType>({
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
    region: null,
    subject: [],
  });
  const [formErrors, setFormErrors] = useState<FormErrorType>({
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
    region: null,
    subject: null,
  });
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state: RootState) => state.settings.language,
  );
  const formValidation = new FormValidation(formData, users, "sign-up");

  function onUserDataUpdate(key: string, event: any) {
    if (key === "subject") {
      setFormData({
        ...formData,
        [key]:
          typeof event.target.value === "string"
            ? event.target.value.split(",")
            : event.target.value,
      });
    }

    setFormData({
      ...formData,
      [key]: event.target.value || null,
    });
  }

  function validateForm() {
    if (formValidation.isFormValid()) {
      dispatch(
        addUser({
          email: formData.email as string,
          password: formData.password as string,
        }),
      );
      navigate("/");
    } else {
      setFormErrors({
        ...formErrors,
        name: formValidation.nameValidationError(),
        email: formValidation.emailValidationError(),
        password: formValidation.passwordValidationError(),
        confirmPassword: formValidation.confirmPasswordValidationError(),
        region: formValidation.regionValidationError(),
        subject: formValidation.subjectValidationError(),
      });
    }
  }

  function onSubmitClick() {
    validateForm();
  }

  function onGoToLoginPageClick() {
    navigate("/sign-in");
  }

  function getLocalizationText(key: string) {
    return resources[selectedLanguage][key];
  }

  return (
    <div className="root">
      <Header />
      <div className="container">
        <AuthHeader
          title={getLocalizationText("sign_up")}
          description={getLocalizationText("sign_up_description")}
        />
        <div className="inputsContainer">
          <AppTextFiled
            error={formErrors.name !== null}
            fullWidth
            label={getLocalizationText(formErrors.name || "name")}
            type="text"
            onChange={(event) => onUserDataUpdate("name", event)}
            value={formData.name}
          />
          <AppTextFiled
            error={formErrors.email !== null}
            fullWidth
            label={getLocalizationText(formErrors.email || "email")}
            type="email"
            onChange={(event) => onUserDataUpdate("email", event)}
            value={formData.email}
          />
          <FormControl fullWidth>
            <AppInputLabel id="select-label" error={formErrors.region !== null}>
              {getLocalizationText(formErrors.region || "region")}
            </AppInputLabel>
            <AppSelect
              error={formErrors.region !== null}
              fullWidth
              label={getLocalizationText(formErrors.region || "region")}
              value={formData.region}
              onChange={(event) => onUserDataUpdate("region", event)}
            >
              {regions.map((region) => {
                return <AppMenuItem value={region}>{region}</AppMenuItem>;
              })}
            </AppSelect>
          </FormControl>
          <FormControl fullWidth>
            <AppInputLabel
              id="checkbox-label"
              error={formErrors.subject !== null}
            >
              {getLocalizationText(formErrors.subject || "subject")}
            </AppInputLabel>
            <AppMultiSelect
              error={formErrors.subject !== null}
              fullWidth
              label={getLocalizationText(formErrors.subject || "subject")}
              value={formData.subject}
              onChange={(event) => onUserDataUpdate("subject", event)}
            >
              {subjects.map((subject) => {
                return (
                  <AppMenuItem key={subject} value={subject}>
                    <AppListItemText primary={subject} />
                    <Checkbox
                      checked={
                        Array.isArray(formData.subject) &&
                        formData.subject.includes(subject)
                      }
                      sx={{
                        color: "gray",
                        "&.Mui-checked": {
                          color: "green",
                        },
                      }}
                    />
                  </AppMenuItem>
                );
              })}
            </AppMultiSelect>
          </FormControl>
          <AppTextFiled
            error={formErrors.password !== null}
            fullWidth
            label={getLocalizationText(formErrors.password || "password")}
            type="password"
            onChange={(event) => onUserDataUpdate("password", event)}
            value={formData.password}
          />
          <AppTextFiled
            error={formErrors.confirmPassword !== null}
            fullWidth
            label={getLocalizationText(
              formErrors.confirmPassword || "confirm_password",
            )}
            type="password"
            onChange={(event) => onUserDataUpdate("confirmPassword", event)}
            value={formData.confirmPassword}
          />
        </div>
        <div className="buttonsContainer">
          <AppTextButton onClick={onGoToLoginPageClick}>
            {getLocalizationText("account_exists")}
          </AppTextButton>
          <AppContainedButton onClick={onSubmitClick}>
            {getLocalizationText("submit")}
          </AppContainedButton>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
