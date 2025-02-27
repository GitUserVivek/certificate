import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Form } from "react-router-dom";
import MarriageCertificate from "./components/MarriageCertificate";
import FormComponent from "./components/FormComponent"

const App = () => {
  const [formData, setFormData] = useState({
    husbandNameEng: "",
    husbandNameMar: "",
    wifeNameEng: "",
    wifeNameMar: "",
    marriageDate: "",
    addressEng: "",
    addressMar: "",
    date: "",
    remarksEng: "",
    remarksMar: "",
    placeEng: "",
    placeMar: "",
  });

  return (
    <div className=" flex items-center justify-center">

      <Router>
        <Routes>
          <Route path="/" element={<FormComponent setFormData={setFormData} />} />
          <Route path="/certificate" element={<MarriageCertificate formData={formData} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
