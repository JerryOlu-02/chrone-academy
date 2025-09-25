import { Outlet } from "react-router";
import "./App.scss";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <main className="main">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
