import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";
import { ProfileProvider } from "./Context/ProfileContext";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Profilo from "./Pages/Profilo";
import Compatibilita from "./Pages/Compatibilita";
import Segni from "./Pages/Segni";

export default function App() {
  return (
    <ThemeProvider>
      <ProfileProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profilo />} />
            <Route path="/compatibility" element={<Compatibilita />} />
            <Route path="/signs" element={<Segni />} />
          </Routes>
        </Router>
      </ProfileProvider>
    </ThemeProvider>
  );
}
