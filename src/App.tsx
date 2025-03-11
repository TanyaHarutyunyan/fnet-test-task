import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from "./pages/sign-up";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
