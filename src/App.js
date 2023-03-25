
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Bot from "./pages/Bot";
import Home from "./pages/Home";

function App() {

  return (<BrowserRouter>
      <Routes>

          <Route index element={<Home />} />
          <Route path="cocobot" element={<Bot />} />

      </Routes>
    </BrowserRouter>);
  

}

export default App;
