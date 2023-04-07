import React from "react";
import './App.css';
import Menu from './Layout/Menu';
import { Routes, Route } from "react-router-dom";
import MyTodo from './Layout/MyTodo';
import HomePage from './Layout/HomePage';
import MyInfo from './Layout/MyInfo';
import MyLogin from './Layout/MyLogin';
import MyRegister from './Layout/MyRegister';
import MyForgotPsw from './Layout/MyForgotPsw';
import TabInfo from './Views/TabInfo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Views/Dashboard";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="mytodo" element={<MyTodo />} />
        <Route path="profile" element={<MyInfo />} />
        <Route path="profile/:id/info" element={<TabInfo />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/login" element={<MyLogin />} />
        <Route path="register" element={<MyRegister />} />
        <Route path="forgot" element={<MyForgotPsw />} />
      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
