import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";

export default function DarkMode() {
  // const [darkState, setDarkState] = useState(false);
  // const palletType = darkState ? "dark" : "light";
  // const mainPrimaryColor = darkState ? palette.warning.main : lightBlue[500];
  // const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        light: "#001f31",
        main: "#2c465a",
        dark: "#00000a",
        contrastText: "#fff",
      },
      secondary: {
        light: "#e6504b",
        main: "#ff8277",
        dark: "#ae1523",
        contrastText: "#000",
      },
    },
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div> Sample Text </div>
      <Switch checked={darkState} onChange={handleThemeChange} />
    </ThemeProvider>
  );
}
