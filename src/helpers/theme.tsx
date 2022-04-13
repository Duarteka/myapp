import { createTheme } from "@mui/material";
import { amber, deepPurple, grey, indigo } from "@mui/material/colors";

// export const mainTheme = createTheme({
//   typography: {
//     fontFamily: "Monospace",
//     fontSize: 14,
//   },
// });
const typography = {
  fontFamily: "Monospace",
  fontSize: 14,
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#rgba(255, 255, 255, 0.169);",
    },
    secondary: {
      main: "#ff9e80",
    },
    divider: amber[200],
    text: {
      primary: grey[900],
      secondary: grey[800],
    },
  },
  // typography: typography,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: deepPurple,
    divider: deepPurple[700],
    background: {
      default: indigo[900],
      paper: indigo[900],
    },
    text: {
      primary: "#fff",
      secondary: grey[500],
    },
  },
  // typography: typography,
});

// export { darkTheme, lightTheme, mainTheme };
