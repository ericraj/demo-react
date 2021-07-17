import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    "& > button": {
      height: 56,
      marginLeft: 20
    }
  }
}));

export default useStyles;
