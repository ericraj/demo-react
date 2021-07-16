import { makeStyles } from "@material-ui/core/styles";
import { appBarHeight } from "./constants/styles";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: appBarHeight,
    height: `calc(100vh - ${appBarHeight}px)`
  }
}));

export default useStyles;
