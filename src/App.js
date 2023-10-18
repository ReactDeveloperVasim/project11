import { Card, CardContent } from "@mui/material";
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Fruit } from "./components/Fruit";
import { Monuments } from "./components/Monuments";
import { Speedo } from "./components/Speedo";
import { NavList } from "./components/NavList";

function App() {
  return (
    <Card sx={{ bgcolor: "lavender", height: "100vh" }}>
      <CardContent>
          <BrowserRouter>
          <NavList />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/fruit" element={<Fruit />} />
                  <Route path="/monuments" element={<Monuments />} />
                  <Route path="/speedo" element={<Speedo />} />

               
              </Routes>
          </BrowserRouter>
      </CardContent>
    </Card>
  );
}

export default App;
