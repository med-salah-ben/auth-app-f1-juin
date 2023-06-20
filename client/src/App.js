import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { getAuthUser } from "./JS/actions/userActions";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();
  const getUser = () => dispatch(getAuthUser());
  useEffect(() => {
    if(localStorage.getItem("token")){
      getUser();
    }
  }, []);

  return (
    <div>
      <AppNavbar />
      <Routes>
        <Route path="*" element={<img src="https://cdn.vectorstock.com/i/1000x1000/73/49/404-error-page-not-found-miss-paper-with-white-vector-20577349.webp" alt="404"/>} />
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
