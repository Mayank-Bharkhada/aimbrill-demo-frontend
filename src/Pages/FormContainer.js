import React from "react";
import { useSelector } from "react-redux";
import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  Paper,
} from "@mui/material";
import Step1 from "../FormSteps/Step1";
import Step2 from "../FormSteps/Step2";
import Step3 from "../FormSteps/Step3";
import Step4 from "../FormSteps/Step4";

function FormContainer() {
  const { step } = useSelector((state) => state);

  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

  return (
    <div style={containerStyle}>
       <div style={headerStyle}>
        <h1>Get a project quote</h1>
        <p>Please fill the form below to receive a quote for your project.</p>
        <p style={{ marginTop: "-10px", marginBottom: "50px" }}>Feel free to add as much detail as needed.</p>
      </div>

      <Paper style={paperStyle}>
        <Stepper activeStep={step - 1} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
      </Paper>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  textAlign: "center",
};

const paperStyle = {
  width: "50%",
  margin: "auto",
  padding: "20px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  borderRadius: "10px",
};


const headerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export default FormContainer;
