import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";

// pages
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* Home page */}
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster position="top-right" />
    </>
  );
}

export default App;
