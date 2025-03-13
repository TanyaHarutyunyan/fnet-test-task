import { useSelector } from "react-redux";
import AppTextButton from "../../components/AppTextButton";
import Header from "../../components/header";
import { RootState } from "../../redux/store";
import resources from "../../translations";
import "./styles.css";
import AppTypography from "../../components/AppTypography";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const selectedLanguage = useSelector(
    (state: RootState) => state.settings.language,
  );

  function getLocalizationText(key: any) {
    return resources[selectedLanguage][key];
  }

  function onAuthButtonClick(page: string) {
    navigate(`/${page}`);
  }

  return (
    <div className="homeContainer">
      <Header />
      <AppTypography
        sx={{
          color: "#34C88A",
          fontSize: "32px",
          textAlign: "center",
        }}
      >
        {getLocalizationText("welcome_app")}
      </AppTypography>
      <div className="content">
        <AppTextButton
          onClick={() => onAuthButtonClick("sign-in")}
          sx={{
            fontSize: "20px",
          }}
        >
          {getLocalizationText("sign_in")}
        </AppTextButton>
        <AppTextButton
          onClick={() => onAuthButtonClick("sign-up")}
          sx={{
            fontSize: "20px",
          }}
        >
          {getLocalizationText("sign_up")}
        </AppTextButton>
      </div>
    </div>
  );
}

export default Home;
