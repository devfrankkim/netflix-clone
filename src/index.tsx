import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./index.css";

import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  </BrowserRouter>
);
