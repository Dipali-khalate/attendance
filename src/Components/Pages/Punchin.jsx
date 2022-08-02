import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import  axios from "axios";
import "../style/punchin.css";

function Punchin() {
  const [punchin, setPunchin] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPunchin({ ...punchin, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(punchin);
    axios.post("",punchin)
    navigate("/punchout");
  };

  return (
    <>
      <div className="mypunchin">
        <div className="mypunchinheader">
          <label>
            <h3>Punch In</h3>
          </label>
          <div className="punchincontainer">
            <div className="mypunchindate">
              <h4>Date:</h4>
              <input onChange={handleChange} type="date" name="indate" id="" />
            </div>
            <div className="punchintime">
              <h4>Time:</h4>
              <input onChange={handleChange} type="text" name="intime" id="" />
              <h6>HH:MM</h6>
            </div>
            <div className="punchinnote">
              <h4>Note:</h4>
              <textarea
                name="innote"
                onChange={handleChange}
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </div>
          
          </div>
        </div>
        <div className="punchinbtn">
              <button onClick={handleSubmit}>In</button>
            </div>
      </div>
    </>
  );
}

export default Punchin;
