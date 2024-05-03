import "./App.scss";
import "swiper/css";
import './assets/boxicons-2.1.4/css/boxicons.min.css'

import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import CustomRoutes from "./config/CustomRoutes";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <CustomRoutes />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
