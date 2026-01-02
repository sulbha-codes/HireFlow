import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SavedJobs from "./pages/SavedJobs";
import ApplyJob from "./pages/ApplyJob";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/saved" element={<SavedJobs />} />
      <Route path="/apply/:id" element={<ApplyJob />} />
    </Routes>
  );
};

export default App;