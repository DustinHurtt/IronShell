import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";

const PrivateRoutes = ({ logout }) => {
  return (
    <Routes>
      <Route path="/" element={<Home logout={logout} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
};

export default PrivateRoutes;
