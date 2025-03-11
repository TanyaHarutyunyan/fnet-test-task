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

interface IUserData {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  region: string;
  subject: string[];
}

const regions = ["Shirak", "Lori", "Tavush"];
const subjects = ["Math", "English", "History"];

function SignUp() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<IUserData>({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    region: "",
    subject: [],
  });

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

  function onGoToLoginPageClick() {
    navigate("/sign-in");
  }

  return (
    <div className="container">
      <div className="inputsContainer">
        <div className="nameInputs">
          <AppTextFiled
            type="text"
            placeholder="Name"
            onChange={(event) => onUserDataUpdate("name", event)}
            value={userData.name}
          />
          <AppTextFiled
            type="text"
            placeholder="Last Name"
            onChange={(event) => onUserDataUpdate("lastName", event)}
            value={userData.lastName}
          />
        </div>
        <AppTextFiled
          fullWidth
          type="email"
          placeholder="Email"
          onChange={(event) => onUserDataUpdate("email", event)}
          value={userData.email}
        />
        <FormControl fullWidth>
          <AppInputLabel id="select-label">Region</AppInputLabel>
          <AppSelect
            fullWidth
            label={"Region"}
            value={userData.region}
            onChange={(event) => onUserDataUpdate("region", event)}
          >
            {regions.map((region) => {
              return <AppMenuItem value={region}>{region}</AppMenuItem>;
            })}
          </AppSelect>
        </FormControl>
        <FormControl fullWidth>
          <AppInputLabel>Subject</AppInputLabel>
          <AppMultiSelect
            fullWidth
            label={"Subject"}
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
          fullWidth
          type="password"
          placeholder="Password"
          onChange={(event) => onUserDataUpdate("password", event)}
          value={userData.password}
        />
        <AppTextFiled
          fullWidth
          type="password"
          placeholder="Confirm Password"
          onChange={(event) => onUserDataUpdate("confirmPassword", event)}
          value={userData.confirmPassword}
        />
      </div>
      <div className="buttonsContainer">
        <AppTextButton onClick={onGoToLoginPageClick}>
          Already have account? Go to login page
        </AppTextButton>
        <AppContainedButton>Submit</AppContainedButton>
      </div>
    </div>
  );
}

export default SignUp;
