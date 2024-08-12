import { CategoriesProvider } from "./providers/CategoriesContext";
import { ToastProvider } from "./providers/ToastContext";
import { Router } from "./routes/Router";

function App() {
  return (
    <>
      <ToastProvider>
        <CategoriesProvider>
          <Router />
        </CategoriesProvider>
      </ToastProvider>
    </>
  );
}

export default App;
