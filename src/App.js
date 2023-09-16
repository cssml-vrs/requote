import './App.css';
import * as React from "react";
import { FcAbout, FcBusinessman, FcCamera, FcFullTrash } from "react-icons/fc";

import MusicFloat from "./components/MusicFloat";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./routes/Home"
import AddEditQuotes from "./routes/AddEditQuotes"
import Settings from "./routes/Settings"

import Layout from './components/Layout';
// import { Menu } from './components/Menu';
// import { createRoot } from "react-dom/client";
// import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="AddEditQuotes" element={<AddEditQuotes />} />
          <Route path="Settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

    // <div className="App">
      
    //   <header className="App-header">
    //   <Menu />
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>