import React from "react"
import ClienteLanding from "./app/pages/ClienteLanding"
import MecanicoLanding from "./app/pages/MecanicoLanding"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./app/components/header";
import { ScrollToTop } from "./app/components/ScrollToTop";
import PrivacyPages from "./app/pages/PrivacyPages";
import AboutPages from "./app/pages/AboutPages";

function App() {


  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<AboutPages />} />
          <Route path="/client" element={<ClienteLanding />} />
          <Route path="/mecanico" element={<MecanicoLanding />} />
          <Route path="/global/es/privacy" element={<PrivacyPages />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
