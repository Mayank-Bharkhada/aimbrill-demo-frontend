import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { setStep, setService } from "../Store/reducers";
import { useDispatch, useSelector } from "react-redux";


function Step2() {

  const dispatch = useDispatch();
  const { service } = useSelector(
    (state) => state.data
  );

  const handleNext = () => {
    if (service !== "") {
      dispatch(setStep(3));
    }
  };

  const handlePrevious = () => {
    dispatch(setStep(1));
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center",width:"60%",paddingLeft:"5%",margin:"auto",paddingTop:"5%",paddingBottom:"4%",height: "350px" }}>
      <div>
        <div style={{display:"flex",flexDirection:"column"}}>
        <h2>Our services</h2>
          <p style={{marginTop:"-10px",marginBottom:"30px"}}>Please select which service you are interested in.</p>
        </div>

        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Button
              style={{
                padding: "20px", width: "90%",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                
                backgroundColor: service === "Development" ? "#4a3aff" : "",
                color: service === "Development" ? "white" : "#4a3aff"
              }}
              color="primary"
              onClick={() => dispatch(setService("Development"))}

            >
              <i class="fa fa-code" aria-hidden="true"
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  margin: "10px",
                  padding: "15px",
                  borderRadius: "100%",
                  color: "white"
                }}></i>
              Development
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              style={{
                padding: "20px", width: "90%",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                backgroundColor: service === "Web Design" ? "#4a3aff" : "",
                color: service === "Web Design" ? "white" : "#4a3aff"
              }}
              color="primary"
              onClick={() => dispatch(setService("Web Design"))}

            >
              <i class="fa fa-paint-brush" aria-hidden="true"
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  margin: "10px",
                  padding: "15px",
                  borderRadius: "100%",
                }}
              ></i>
              Web Design
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              style={{
                padding: "20px", width: "90%",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                backgroundColor: service === "Marketing" ? "#4a3aff" : "",
                color: service === "Marketing" ? "white": "#4a3aff"
                            }}
              color="primary"
              onClick={() => dispatch(setService("Marketing"))}

            >
              <i class="fa fa-bullhorn" aria-hidden="true"
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  margin: "10px",
                  padding: "15px",
                  borderRadius: "100%",
                }}

              ></i>
              Marketing
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              style={{
                padding: "20px", width: "90%",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                backgroundColor: service === "Other" ? "#4a3aff" : "",
                color: service === "Other" ? "white" : "#4a3aff"
                        }}
              color="primary"
              onClick={() => dispatch(setService("Other"))}

            >
              <i class="fa fa-cog" aria-hidden="true"
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  margin: "10px",
                  padding: "15px",
                  borderRadius: "100%",
                }}
              ></i>
              Other
            </Button>
          </Grid>
        </Grid>
</div>
      </div>
      <div style={{ marginTop: "20px", marginRight: "15%", marginLeft: "18%", display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined"
          style={{ borderRadius: "20px", fontSize: 15, fontWeight: "bolder", textAlign: "end", padding: "15px",width:"200px" }}
          onClick={handlePrevious}>
          Previous
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ borderRadius: "20px", fontSize: 15, fontWeight: "bolder", textAlign: "end", padding: "15px",color:"white",backgroundColor:"#4a3aff",width:"200px" }}
          onClick={handleNext}
          disabled={service == ""}
        >
          Next Step
        </Button>
      </div>
    </>
  );
}

export default Step2;
