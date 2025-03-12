import AppTypography from "../AppTypography";
import "./styles.css";

interface IAuthHeaderProps {
  title: string;
  description: string;
}

function AuthHeader({ title, description }: IAuthHeaderProps) {
  return (
    <div className="authHeader">
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

export default AuthHeader;
