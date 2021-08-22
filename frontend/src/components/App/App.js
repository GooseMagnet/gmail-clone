import "./App.css";
import NavBar from "../NavBar/NavBar";
import Sidebar from "../MenuLeft/Sidebar";
import EmailSection from "../EmailSection/EmailSection";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Sidebar />
      <EmailSection />
    </div>
  );
};

export default App;
