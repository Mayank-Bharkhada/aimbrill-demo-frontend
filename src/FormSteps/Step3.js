// src/Step3.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep, setBudget } from "../Store/reducers";
import { Radio, RadioGroup, FormControlLabel, Button, Grid } from "@mui/material";

function Step3() {
  const dispatch = useDispatch();
  const { budget } = useSelector((state) => state.data);

  const handleNext = () => {
    dispatch(setStep(4));
  };

  const handlePrevious = () => {
    dispatch(setStep(2));
  };

  const handleSelectBudget = (selectedBudget) => {
    dispatch(setBudget(selectedBudget));
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "60%", paddingLeft: "2%", margin: "auto", paddingTop: "5%", paddingBottom: "4%", height: "350px" }}>
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2>What’s your project budget?</h2>
            <p style={{ marginTop: "-10px", marginBottom: "30px" }}>Please select the project budget range you have in mind.</p>
          </div>
          <RadioGroup
            name="budget"
            value={budget}
            onChange={(e) => handleSelectBudget(e.target.value)}
          >
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  style={{
                    padding: "30px", width: "80%",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                    marginBottom: "20px"

                  }}
                  value="$5,000 - $10,000"
                  control={<Radio />}
                  label="$5,000 - $10,000"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  style={{
                    padding: "30px", width: "80%",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                  }}
                  value="$10,000 - $20,000"
                  control={<Radio />}
                  label="$10,000 - $20,000"
                />
              </Grid>

              <Grid item xs={12} sm={6}>

                <FormControlLabel
                  style={{
                    padding: "30px", width: "80%",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                  }}
                  value="$20,000 - $50,000"
                  control={<Radio />}
                  label="$20,000 - $50,000"
                />
              </Grid> <Grid item xs={12} sm={6}>

                <FormControlLabel
                  style={{
                    padding: "30px", width: "80%",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                  }}
                  value="$50,000 +"
                  control={<Radio />}
                  label="$50,000 +"
                />
              </Grid>
            </Grid>
          </RadioGroup>
</div>

        </div>
        <div style={{ marginTop: "20px", marginRight: "15%", marginLeft: "16%", display: "flex", justifyContent: "space-between" }}>
          <Button variant="outlined"
            style={{ borderRadius: "20px", fontSize: 15, fontWeight: "bolder", textAlign: "end", padding: "15px",width:"200px" }}
            onClick={handlePrevious}>
            Previous
          </Button>
          <Button
            color="primary"
            style={{ borderRadius: "20px", fontSize: 15, fontWeight: "bolder", textAlign: "end", padding: "15px", backgroundColor: '#4a3aff', color: "white",width:"200px" }}
            onClick={handleNext}
            disabled={budget == ""}
          >
            Next Step
          </Button>
        </div>
      </>
      );
}

      export default Step3;
