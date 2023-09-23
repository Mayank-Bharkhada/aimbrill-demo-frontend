// src/Step1.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBudget, setCompanyName, setEmail, setFullName, setNumber, setService, setStep } from '../Store/reducers';
import { Button } from "@mui/material";


import { useNavigate} from "react-router-dom";

function Step4() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);

  const handleSubmit = async() => {
    try {
      const response = await fetch("http://127.0.0.1:3001/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send your form data as JSON
      });

      if (response.ok) {
        const data = await response.json();
        // Display server response
        if(data.success){
          alert("Successfully data submited");
          dispatch(setFullName(""));
          dispatch(setEmail(""));
          dispatch(setNumber(""));
          dispatch(setCompanyName(""));
          dispatch(setService(""));
          dispatch(setBudget(""));
          dispatch(setStep(1));
          navigate('/')
        }else{
          alert("Error submitting data please try lateer");
        }
      } else {
        alert("Error submitting data please try lateer");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting data.");
    }
  };

  
  const handlePrevious = () => {
    dispatch(setStep(3));
  };

  return (
    <>
    <div style={{display:"flex",flexDirection: "column", justifyContent: "center", alignItems: "center",width:"60%",paddingLeft:"2%",margin:"auto",paddingTop:"5%",paddingBottom:"2%",height: "350px"}}>
     
    
      <i class="fa fa-thumbs-up" aria-hidden="true" 
      style={{
        // backgroundColor: "blue",
        color: "#4a3aff",
        margin: "10px",
        fontSize:"100px",
        padding: "15px",
        borderRadius: "100%",
      }}
      
      ></i>



            <h2>Submit your quote request</h2>
            <p style={{ marginTop: "-10px"}}>Please review all the information you previously typed in </p>
            <p style={{ marginTop: "-10px"}} >the past steps, and if all is okay, submit your message to </p>
            <p style={{ marginTop: "-12px", marginBottom: "30px" }}>receive a project quote in 24 - 48 hours.</p>
     
       <Button

      color="primary"
      style={{ borderRadius: "20px", fontSize: 15, fontWeight: "bolder", textAlign: "end", padding: "15px", backgroundColor: '#4a3aff', color: "white", width:"50%"}}
      onClick={handleSubmit}
      >
      Submit
    </Button>
    </div>
    <div style={{ marginTop: "20px", marginRight: "15%", marginLeft: "18%", display: "flex", justifyContent: "space-between" }}>
    <Button variant="outlined"
      style={{borderRadius: "20px",fontSize: 15,fontWeight:"bolder",textAlign:"end",padding:"15px",width:"200px"}}
    onClick={handlePrevious}>
      Previous
    </Button>
  </div>
      </>
  );
}

export default Step4;
