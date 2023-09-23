import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./Store/store";
import FormContainer from "./Pages/FormContainer";
import DummyEmployeesList from "./Pages/DummyEmployeesList";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

function MyRouter() {
  const [showEmployee, setShowEmployee] = useState(false);

  const handleSearch = () => {
    console.log("Subcribing . . .");
  };

  return (
    <Provider store={store}>
      <div className="App">
        <header style={headerStyle}>
          <h1>Aimbrill Techinfo</h1>
          <div style={linkStyle}>
            <Link to="/EmpList" style={{ color: "white", textDecoration: "none", fontSize: "25px" }}>
              Employee List
            </Link>
          </div>
        </header>
        <Outlet />
        <div style={footerStyle}>
          <h1>Aimbrill Techinfo</h1>
          <div style={searchInputStyle}>
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              InputProps={{ sx: inputStyle }}
              style={{ width: "100%" }}
            />
            <Button style={subscribeButtonStyle} onClick={handleSearch}>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </Provider>
  );
}

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  margin: "50px",
  marginBottom: "110px",
};

const linkStyle = {
  borderRadius: "20px",
  fontSize: "15px",
  fontWeight: "bold",
  textAlign: "center",
  padding: "5px",
  paddingTop: "20px",
  width: "15%",
  backgroundColor: "blue",
};

const footerStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "50px",
  marginTop: "50px",
  borderTop: "5px solid #f9f9f9",
};

const searchInputStyle = {
  display: "flex",
  alignItems: "center",
};

const inputStyle = {
  borderRadius: "30px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
};

const subscribeButtonStyle = {
  borderRadius: "30px",
  fontSize: "11px",
  fontWeight: "bold",
  padding: "15px",
  marginLeft: "-31%",
  backgroundColor: "#4a3aff",
  color: "white",
};

export default MyRouter;
