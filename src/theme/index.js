import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import styles from "./styles";
import fonts from "./fonts";
import components from "./components";

const theme = extendTheme({
  colors,
  fonts,
  styles,
  components,
});

export default theme;
