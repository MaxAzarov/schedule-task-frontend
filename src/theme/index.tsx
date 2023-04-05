import { createTheme } from "@mui/material";
import { css, GlobalStyles as MUIGlobalStyles } from "@mui/material";

export const theme = createTheme();

export const GlobalStyles = (
  <MUIGlobalStyles
    styles={css`
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      a {
        text-decoration: none;
        font-weight: 500;
      }

      .rtw-wrapper {
        border-radius: 20px;
        background-color: white;
      }
    `}
  />
);
