import React from "react"
import "./style.css"

import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home"
import Icon from "./pages/icon"
import Add from "./pages/Add"
import Edit from "./pages/Edit"
import View from "./pages/View"

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Icon />} />
      <Route path="add" element={<Add />} />
      <Route path="edit" element={<Edit />} />
      <Route path="view" element={<View />} />
    </Routes>
  )
}

export default App