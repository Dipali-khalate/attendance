import React, { useEffect, useState } from "react";
import "../style/punchin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CameraAuth from "../cameraAuth/CameraAuth";

function Punchout(props) {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [punchout, setpunchout] = useState({});

  const handleChange = (e) => {
    setpunchout({ ...punchout, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(punchout);
    axios
      .post("", punchout)
      .then((data) => {
        console.log(data);
      })
      .catch((data) => {
        console.log(data);
      });
      props.setshowModel({...props.shomodel,model:false,inout:true})
    // navigate("/Viewattrecord");
  };
  useEffect(()=>{
    setpunchout({
      ...punchout,
      outdate: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
      outtime: `${date.getHours()}:${date.getMinutes()}`,
    });
  },[])

  return (
    <>
      <div className="mypunchin">
        <div className="bg"></div>
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
                <input
                  onChange={handleChange}
                  type="date"
                  name="outdate"
                  value={`${date.getFullYear()}-${
                    JSON.stringify(date.getMonth()).length === 1
                      ? "0" + JSON.stringify(date.getMonth()+1)
                      : JSON.stringify(date.getMonth()+1)
                  }-${
                    JSON.stringify(date.getDate()).length === 1
                      ? "0" + JSON.stringify(date.getDate())
                      : JSON.stringify(date.getDate())
                  }`}
                  disabled
                  id=""
                />
              </div>
              <div className="punchintime">
                <h4>Time:</h4>
                <input
                  value={`${
                    JSON.stringify(date.getHours()).length === 1
                      ? "0" + JSON.stringify(date.getHours())
                      : JSON.stringify(date.getHours())
                  }:${
                    JSON.stringify(date.getMinutes()).length === 1
                      ? "0" + JSON.stringify(date.getMinutes())
                      : JSON.stringify(date.getMinutes())
                  }`}
                  disabled
                  onChange={handleChange}
                  type="text"
                  name="outtime"
                  id=""
                />
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
            </div>
            <CameraAuth />
          <div className="punchinbtn">
            <button onClick={()=>props.setshowModel({...props.showmodel,inout:true})}>In</button>
            <button onClick={handleSubmit} style={{background:"#008000"}}>Save</button>
          </div>
          </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Punchout;
