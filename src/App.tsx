import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routing";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

const theme = createTheme();

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
