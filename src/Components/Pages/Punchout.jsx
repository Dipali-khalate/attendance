import React, { useState } from "react";
import "../style/punchin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Punchout() {
  const navigate = useNavigate();
    const [punchout, setpunchout] = useState({});

  const handleChange = (e) => {
    setpunchout({ ...punchout, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(punchout);
    axios.post("",punchout).then((data)=>{
      console.log(data);
    }).catch((data)=>{
         console.log(data);
    })
    navigate("/Viewattrecord");
  };

  return (
    <>
      <div className="mypunchin">
        <div className="mypunchinheader">
          <label>
            <h3>Punch Out</h3>
          </label>
          <div className="punchincontainer">
            <div>
              <p>
                <span style={{ margin: "0 30px" }}> Punch In Date: </span>{" "}
                {punchout.indate}
              </p>
              <p>
                <span style={{ margin: "0 30px" }}> Punch In Time: </span>{" "}
                {punchout.intime}
              </p>
              <p>
                <span style={{ margin: "0 30px" }}> Punch In Note: </span>{" "}
                {punchout.innote}
              </p>
            </div>
            <div className="mypunchindate">
              <h4>Date:</h4>
              <input onChange={handleChange} type="date" name="outdate" id="" />
            </div>
            <div className="punchintime">
              <h4>Time:</h4>
              <input onChange={handleChange} type="text" name="outtime" id="" />
              <h6>HH:MM</h6>
            </div>
            <div className="punchinnote">
              <h4>Note:</h4>
              <textarea
                name="outnote"
                onChange={handleChange}
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div className="punchinbtn">
              <button onClick={handleSubmit}>Out</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Punchout;
