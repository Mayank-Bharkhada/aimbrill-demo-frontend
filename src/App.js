import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormContainer from "./Pages/FormContainer";
import DummyEmployeesList from "./Pages/DummyEmployeesList";
import MyRouter from "./MyRouter";
import Home from "./Pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyRouter />}>
          <Route index element={<Home />} />
          <Route path="Form" element={<FormContainer />} />
          <Route path="EmpList" element={<DummyEmployeesList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);