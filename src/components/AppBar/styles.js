import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    boxShadow: "none",
    "& .MuiToolbar-root": {
      display: "flex",
      alignItems: "center",
      padding: 0,
      "& .MuiTypography-root": {
        maxWidth: "fit-content",
        fontSize: "1.5em",
        fontWeight: 700,
        letterSpacing: 0
      },
      "& :not(:nth-child(1))": {
        marginLeft: 20,
        fontSize: "1.3em",
        fontWeight: 500
      }
    },
    "& a": {
      color: "#fff",
      textDecoration: "none"
    }
  },
  title: {
    flexGrow: 1
  }
}));

export default useStyles;
