import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <ToastContainer position="top-center" autoClose={3000} closeOnClick />
      <Footer />
    </>
  );
}

export default App;
