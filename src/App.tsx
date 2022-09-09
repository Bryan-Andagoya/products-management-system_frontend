import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import { NotFoundPage, ProductsPage } from "./pages";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
