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
import { addUser } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface IUserData {
  name: string | null;
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
  region: string | null;
  subject: string[];
}

const regions = ["Shirak", "Lori", "Tavush"];
const subjects = ["Math", "English", "History"];

function SignUp() {
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.users);
  const [userData, setUserData] = useState<IUserData>({
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
    region: null,
    subject: [],
  });
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
    region: null,
    subject: null,
  });
  const formValidation = new FormValidation(userData, users, "sign-up");
  const dispatch = useDispatch();

  function onUserDataUpdate(key: string, event: any) {
    if (key === "subject") {
      setUserData({
        ...userData,
        [key]:
          typeof event.target.value === "string"
            ? event.target.value.split(",")
            : event.target.value,
      });
    }

    setUserData({
      ...userData,
      [key]: event.target.value,
    });
  }

  function validateForm() {
    if (formValidation.isFormValid()) {
      dispatch(
        addUser({
          email: userData.email,
          password: userData.password,
        }),
      );
      navigate("/");
    } else {
      setErrors({
        ...errors,
        name: formValidation.nameValidation(),
        email: formValidation.emailValidation(),
        password: formValidation.passwordValidation(),
        confirmPassword: formValidation.confirmPasswordValidation(),
        region: formValidation.regionValidation(),
        subject: formValidation.subjectValidation(),
      });
    }
  }

  function onSubmitClick() {
    validateForm();
  }

  function onGoToLoginPageClick() {
    navigate("/sign-in");
  }

  return (
    <div className="root">
      <div className="container">
        <div className="inputsContainer">
          <AppTextFiled
            error={errors.name !== null}
            fullWidth
            label={errors.name || "Name"}
            type="text"
            onChange={(event) => onUserDataUpdate("name", event)}
            value={userData.name}
          />
          <AppTextFiled
            error={errors.email !== null}
            fullWidth
            label={errors.email || "Email"}
            type="email"
            onChange={(event) => onUserDataUpdate("email", event)}
            value={userData.email}
          />
          <FormControl fullWidth>
            <AppInputLabel id="select-label" error={errors.region !== null}>
              {errors.region || "Region"}
            </AppInputLabel>
            <AppSelect
              error={errors.region !== null}
              fullWidth
              label={errors.region || "Region"}
              value={userData.region}
              onChange={(event) => onUserDataUpdate("region", event)}
            >
              {regions.map((region) => {
                return <AppMenuItem value={region}>{region}</AppMenuItem>;
              })}
            </AppSelect>
          </FormControl>
          <FormControl fullWidth>
            <AppInputLabel id="checkbox-label" error={errors.subject !== null}>
              {errors.subject || "Subject"}
            </AppInputLabel>
            <AppMultiSelect
              error={errors.subject !== null}
              fullWidth
              label={errors.subject || "Subject"}
              value={userData.subject}
              onChange={(event) => onUserDataUpdate("subject", event)}
            >
              {subjects.map((subject) => {
                return (
                  <AppMenuItem key={subject} value={subject}>
                    <AppListItemText primary={subject} />
                    <Checkbox
                      checked={userData.subject.includes(subject)}
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
            error={errors.password !== null}
            fullWidth
            label={errors.password || "Password"}
            type="password"
            onChange={(event) => onUserDataUpdate("password", event)}
            value={userData.password}
          />
          <AppTextFiled
            error={errors.confirmPassword !== null}
            fullWidth
            label={errors.confirmPassword || "Confirm Password"}
            type="password"
            onChange={(event) => onUserDataUpdate("confirmPassword", event)}
            value={userData.confirmPassword}
          />
        </div>
        <div className="buttonsContainer">
          <AppTextButton onClick={onGoToLoginPageClick}>
            Already have account? Go to login page
          </AppTextButton>
          <AppContainedButton onClick={onSubmitClick}>
            Submit
          </AppContainedButton>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
