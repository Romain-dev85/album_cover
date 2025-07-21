import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import "./globals.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
