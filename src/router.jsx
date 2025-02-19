import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SignIn from "./pages/signin";
import Home from "./pages/home";

const AppRouter = () => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/sign-in" />}
        />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;