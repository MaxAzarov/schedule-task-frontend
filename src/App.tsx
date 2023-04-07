import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@emotion/react";
import { AppRoutes } from "./routing";
import { CssBaseline, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyles } from "./theme";
import { SnackbarAlert } from "./components/SnackbarAlert";

const theme = createTheme();
const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SnackbarAlert />

          {GlobalStyles}

          <QueryClientProvider client={queryClient}>
            <AppRoutes />
          </QueryClientProvider>
        </ThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
