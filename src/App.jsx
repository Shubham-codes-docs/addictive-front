import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Form from "./pages/Form";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/add-user" element={<Form />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
