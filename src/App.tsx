import { CategoriesProvider } from "./providers/CategoriesContext";
import { Router } from "./routes/Router";

function App() {
  return (
    <>
      <CategoriesProvider>
        <Router />
      </CategoriesProvider>
    </>
  );
}

export default App;
