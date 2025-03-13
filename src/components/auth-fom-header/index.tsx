import AppTypography from "../AppTypography";
import styles from "./styles.module.css";

interface IAuthFormHeaderProps {
  title: string;
  description: string;
}

function AuthFormHeader({ title, description }: IAuthFormHeaderProps) {
  return (
    <div className={styles.container}>
      <AppTypography
        sx={{
          fontWeight: 700,
          fontSize: "28px",
          lineHeight: "24px",
          textAlign: "center",
          textTransform: "capitalize",
          color: "#194866",
        }}
      >
        {title}
      </AppTypography>
      <AppTypography
        sx={{
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "24px",
          textAlign: "center",
          textTransform: "capitalize",
          color: "#194866",
        }}
      >
        {description}
      </AppTypography>
    </div>
  );
}

export default AuthFormHeader;
