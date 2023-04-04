import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routing";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

const theme = createTheme();
const queryClient = new QueryClient();

function App() {
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
