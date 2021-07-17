import { makeStyles } from "@material-ui/core/styles";
import { appBarHeight, footHeight } from "./constants";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: appBarHeight,
    height: `calc(100vh - ${appBarHeight}px - ${footHeight}px)`
  }
}));

export default useStyles;
