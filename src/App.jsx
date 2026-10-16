import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";

// pages
import Home from "./pages/Home";

// layouts
import MainLayout from "./layouts/MainLayout";
import MainContext from "./context/MainContext";

// context

function App() {
  return (
    <>
      <BrowserRouter>
        <MainContext>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              {/* Home page */}
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </MainContext>
      </BrowserRouter>

      <Toaster position="top-right" />
    </>
  );
}

export default App;
