import { makeStyles } from "@mui/styles";

const loginStyles = makeStyles({
  container: {
    background: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  forms: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  box: {
    padding: "2rem",
    background: "white",
    borderRadius: "0.7rem",
    boxShadow: "10px 10px 15px  15px rgba(0, 0, 0, 0.3)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    height: "auto",
    transition: "height 0.5s ease-in-out",
  },
  tabContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  tab: {
    padding: "6px 2rem !important",
    color: "black !important",
    fontSize: "16px",
    textTransform: "none !important",
  },
  tabActive: {
    backgroundColor: "#7CB9E8 !important",
    padding: "6px 2rem !important",
    color: "black !important",
    fontSize: "16px",
    textTransform: "none !important",
  },
  continueButton: {
    backgroundColor: "rgb(60, 179, 113)",
    color: "white",
    border: "none",
    padding: "0.5rem",
    borderRadius: "0.4rem",
    fontSize: "16px",
    cursor: "pointer",
  },
});

export default loginStyles;
