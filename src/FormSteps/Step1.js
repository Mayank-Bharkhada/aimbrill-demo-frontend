import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setStep,
  setFullName,
  setEmail,
  setNumber,
  setCompanyName,
} from "../Store/reducers";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"; // Import Material-UI Grid

function Step1() {
  const dispatch = useDispatch();
  const { fullName, email, number, companyName } = useSelector(
    (state) => state.data
  );

  const [fullNameValid, setFullNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [numberValid, setNumberValid] = useState(true);
  const [companyNameValid, setCompanyNameValid] = useState(true);

  const validateFullName = (value) => {
    const isValid = value.trim() !== "";
    setFullNameValid(isValid);
    return isValid;
  };

  const validateEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(value);
    setEmailValid(isValid);
    return isValid;
  };

  const validateNumber = (value) => {
    const numberPattern = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
    const isValid = numberPattern.test(value);
    setNumberValid(isValid);
    return isValid;
  };

  const validateCompanyName = (value) => {
    const isValid = value.trim() !== "";
    setCompanyNameValid(isValid);
    return isValid;
  };

  const handleFullNameChange = (e) => {
    const newFullName = e.target.value;
    dispatch(setFullName(newFullName));
    validateFullName(newFullName);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    dispatch(setEmail(newEmail));
    validateEmail(newEmail);
  };

  const handleNumberChange = (e) => {
    const newNumber = e.target.value;
    dispatch(setNumber(newNumber));
    validateNumber(newNumber);
  };

  const handleCompanyNameChange = (e) => {
    const newCompanyName = e.target.value;
    dispatch(setCompanyName(newCompanyName));
    validateCompanyName(newCompanyName);
  };

  const handleNext = () => {
    const isFullNameValid = validateFullName(fullName);
    const isEmailValid = validateEmail(email);
    const isNumberValid = validateNumber(number);
    const isCompanyNameValid = validateCompanyName(companyName);

    if (
      isFullNameValid &&
      isEmailValid &&
      isNumberValid &&
      isCompanyNameValid
    ) {
      dispatch(setStep(2));
    }
  };

  return (
<>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center",width:"60%",paddingLeft:"5%",margin:"auto",paddingTop:"5%",paddingBottom:"4%",height: "350px" }}>
      <div>
        <div style={{display:"flex",flexDirection:"column"}}>
        <h2>Contact details</h2>
          <p style={{marginTop:"-10px",marginBottom:"50px"}}> Please fill your information so we can get in touch with you.</p>
        </div>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              variant="outlined"
              name="fullName"
              value={fullName}
              placeholder="Mayank Bharkhada"
              onChange={handleFullNameChange}
              error={!fullNameValid}
              helperText={!fullNameValid ? "Please enter a valid name." : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              value={email}
              placeholder="Email address"
              onChange={handleEmailChange}
              error={!emailValid}
              helperText={!emailValid ? "Please enter a valid email address." : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              variant="outlined"
              name="number"
              value={number}
              placeholder="+91 7043374230"
              onChange={handleNumberChange}
              error={!numberValid}
              helperText={!numberValid ? "Please enter a valid phone number." : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} >
            <TextField
              label="Company Name"
              variant="outlined"
              name="companyName"
              value={companyName}
              placeholder="Company name"
              onChange={handleCompanyNameChange}
              error={!companyNameValid}
              helperText={!companyNameValid ? "Please enter a valid company name." : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BusinessIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
    <div style={{ marginTop: "20px", marginRight: "15%", marginLeft: "18%", textAlign:"end"}}>
        <Button
          // variant="text"
          color="primary"
          style={{ borderRadius: "20px", fontSize: 15, fontWeight: "bolder", textAlign: "end", padding: "15px",color:"white",backgroundColor:"#4a3aff",width:"200px" }}
          onClick={handleNext}
          disabled={
            !fullNameValid ||
            !emailValid ||
            !numberValid ||
            !companyNameValid
          }
        >
          Next Step
        </Button>
      
        </div>
        </>
  );
}




export default Step1;
