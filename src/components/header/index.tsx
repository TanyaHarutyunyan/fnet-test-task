import { useDispatch, useSelector } from "react-redux";
import AppTextButton from "../AppTextButton";
import styles from "./styles.module.css";
import { setLanguage } from "../../redux/slices/settingsSlice/actions";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { LanguageType } from "../../types";

function Header() {
  const navigate = useNavigate();
  const languages: LanguageType[] = [
    { key: "en", name: "en" },
    { key: "ru", name: "Рус" },
  ];
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state: RootState) => state.settings.language,
  );

  function onLanguageClick(language: string) {
    dispatch(setLanguage(language));
  }

  function onLogoClick() {
    navigate("/");
  }

  return (
    <div className={styles.container}>
      <AppTextButton onClick={onLogoClick}>
        <img src={"/logo.svg"} alt="Logo" width={99} height={64} />
      </AppTextButton>
      <div className={styles.languages}>
        {languages.map((language) => {
          return (
            <AppTextButton
              onClick={() => onLanguageClick(language.key)}
              sx={{
                fontWeight: 700,
                fontSize: "12px",
                lineHeight: "24px",
                textAlign: "center",
                textTransform: "capitalize",
                minWidth: "unset",
                color: "#FFFFFF",
                textDecoration: "unset",
                opacity: selectedLanguage === language.key ? "1" : "0.5",
              }}
            >
              {language.name}
            </AppTextButton>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
