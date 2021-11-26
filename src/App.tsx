import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { Error404, ErrorBoundary } from "./components";
import HomePage from "./pages/Home/HomePage";
import { CocktailsPage, CocktailInfo } from "./pages/Cocktails";

import "./styles/global.css";

function App() {
  return (
    <div className="app">
      <Layout>
        <ErrorBoundary>
          <Routes>
            <Route path="/cocktails" element={<CocktailsPage />} />
            <Route path="/cocktail/:id" element={<CocktailInfo />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </ErrorBoundary>
      </Layout>
    </div>
  );
}

export default App;
