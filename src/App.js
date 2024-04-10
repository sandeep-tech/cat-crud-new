import React from "react";
import Login from "./pages/login";
import Registration from "./pages/registration";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import NoAccess from "./component/noAccess";
import Dashboard from "./pages/dashboard";
import AddCatForm from "./pages/addCatForm";
import EditCat from "./pages/editCat";
import PrivateRoute from "./component/privateRoute";
import Header from "./component/header";

function App() {
  return (
    <>
      <Main>
        <Header />
        <Routes>
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/dashboard/addcat"
            element={
              <PrivateRoute>
                <AddCatForm />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/dashboard/editcat/:id"
            element={
              <PrivateRoute>
                <EditCat />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NoAccess />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
