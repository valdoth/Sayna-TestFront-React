import React from "react";
import Routess from "./routes/Routess";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { mui } from "./theme/mui";

function App() {
  const theme = createTheme(mui);
  return (
    <ThemeProvider theme={theme}>
      <Routess />
    </ThemeProvider>
  );
}

export default App;
