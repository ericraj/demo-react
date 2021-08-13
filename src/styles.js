import { makeStyles } from "@material-ui/core/styles";
import { APP_BAR_HEIGHT, FOOTER_HEIGHT } from "./constants";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: APP_BAR_HEIGHT,
    height: `calc(100vh - ${APP_BAR_HEIGHT}px - ${FOOTER_HEIGHT}px)`
  }
}));

export default useStyles;
