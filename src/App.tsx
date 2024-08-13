import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastList } from "./components/shared/structures/ToastList";
import { CategoriesProvider } from "./providers/CategoriesContext";
import { ToastProvider } from "./providers/ToastContext";
import { Router } from "./routes/Router";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <ToastProvider>
        <CategoriesProvider>
          <Router />
        </CategoriesProvider>
        <ToastList />
      </ToastProvider>
    </QueryClientProvider>
  );
}

export default App;
