import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  list: {
    backgroundColor: theme.palette.background.paper
  }
}));

export default useStyles;
