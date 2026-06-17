import { HashRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import BrandsPage from "./pages/BrandsPage";
import FoundersPage from "./pages/FoundersPage";
import OperationsPage from "./pages/OperationsPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="/founders" element={<FoundersPage />} />
            <Route path="/operations" element={<OperationsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
