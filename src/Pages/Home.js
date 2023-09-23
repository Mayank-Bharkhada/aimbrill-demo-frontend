import React from 'react';
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  const handleSearch = () => {
    // Handle the search logic here
    console.log("Searching...");
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>CLONEABLES FOR WEBFLOW</p>
      <h1 style={headingStyle}>Multi-step Form Webflow</h1>
      <h1 style={subHeadingStyle}>Cloneable Template</h1>
      <p style={descriptionStyle}>Want to receive a monthly email in your inbox with awesome free Webflow cloneables, resources and more? Please submit your email below.</p>
      <div style={inputContainerStyle}>
        <TextField
          placeholder="Enter your email"
          variant="outlined"
          InputProps={{ sx: inputStyle }}
          style={inputStyle}
        />
        <Button style={subscribeButtonStyle} onClick={handleSearch}>
          Subscribe
        </Button>
      </div>
      <p style={infoStyle}><i className="fa fa-check-circle" aria-hidden="true" style={checkmarkStyle}></i> It's 100% free and we will never send more than one email per month</p>
      <div style={quoteContainerStyle}>
        <h2>Get a project quote</h2>
        <div style={quoteButtonStyle}>
          <Link to="/Form" style={quoteLinkStyle}>Get a quote</Link>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
};

const titleStyle = {
  color: "#4a3aff",
  fontWeight: "bold",
  fontSize: "20px",
};

const headingStyle = {
  marginTop: "-10px",
  fontSize: "30px",
};

const subHeadingStyle = {
  marginTop: "-20px",
  fontSize: "20px",
};

const descriptionStyle = {
  marginTop: "10px",
  marginBottom: "30px",
  textAlign: "center",
};

const inputContainerStyle = {
  display: "flex",
  alignItems: "center",
  width: "40%",
};

const inputStyle = {
  borderRadius: "30px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  width: "100%",
};

const subscribeButtonStyle = {
  borderRadius: "30px",
  fontSize: "15px",
  fontWeight: "bold",
  padding: "10px 20px",
  marginLeft: "-140px",
  backgroundColor: "#4a3aff",
  color: "white",
  cursor: "pointer",
};

const infoStyle = {
  color: "#4a3aff",
  fontSize: "15px",
};

const checkmarkStyle = {
  color: "#4a3aff",
};

const quoteContainerStyle = {
  marginTop: "30px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  borderRadius: "20px",
  padding: "20px",
  width: "80%",
  display: "flex",
  justifyContent: "space-between",
};

const quoteButtonStyle = {
  borderRadius: "20px",
  fontSize: "15px",
  fontWeight: "bold",
  textAlign: "center",
  padding: "5px",
  paddingTop: "20px",
  width: "20%",
  backgroundColor: "blue",
  color: "white",
  cursor: "pointer",
};

const quoteLinkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "20px",
};





export default Home;
