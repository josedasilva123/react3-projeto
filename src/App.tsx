import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastList } from "./components/shared/structures/ToastList";
import { CategoriesProvider } from "./providers/CategoriesContext";
import { ToastProvider } from "./providers/ToastContext";
import { Router } from "./routes/Router";
import "./styles/index.scss";
import { ColorModeProvider } from "./providers/ColorModeContext";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <ToastProvider>
        <ColorModeProvider>
          <CategoriesProvider>
            <Router />
          </CategoriesProvider>
        </ColorModeProvider>
        <ToastList />
      </ToastProvider>
    </QueryClientProvider>
  );
}

export default App;
