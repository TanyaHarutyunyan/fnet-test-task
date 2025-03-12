import { useDispatch, useSelector } from "react-redux";
import AppTextButton from "../AppTextButton";
import "./styles.css";
import { setLanguage } from "../../redux/slices/settingsSlice/actions";
import { RootState } from "../../redux/store";

function Header() {
  const languages = ["en", "ru"];
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state: RootState) => state.settings.language,
  );

  function onLanguageClick(language: string) {
    dispatch(setLanguage(language));
  }

  return (
    <div className="header">
      <img src={"/logo.svg"} alt="Logo" width={99} height={64} />
      <div className="languages">
        {languages.map((language) => {
          return (
            <AppTextButton
              onClick={() => onLanguageClick(language)}
              sx={{
                fontWeight: 700,
                fontSize: "12px",
                lineHeight: "24px",
                textAlign: "center",
                textTransform: "capitalize",
                minWidth: "unset",
                color: "#FFFFFF",
                opacity: selectedLanguage === language ? "1" : "0.5",
              }}
            >
              {language}
            </AppTextButton>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
