import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/punchin.css";

function Punchin(props) {
  const [punchin, setPunchin] = useState({});
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPunchin({ ...punchin, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setPunchin({
      ...punchin,
      indate: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
      intime: `${date.getHours()}:${date.getMinutes()}`,
    });
    console.log(punchin);
    axios.post("", punchin);
    props.setshowModel({...props.showmodel,inout:false})
    // navigate("/punchout");
  };

  return (
    <>
      <div className="mypunchin">
        <div>
          <div className="mypunchinheader">
            <label>
              <h3>Punch In</h3>
            </label>
            <div className="punchincontainer">
              <div className="mypunchindate">
                <h4>Date:</h4>
                <input
                  // onChange={handleChange}
                  type="date"
                  value={`${date.getFullYear()}-${
                    JSON.stringify(date.getMonth()).length === 1
                      ? "0" + JSON.stringify(date.getMonth()+1)
                      : JSON.stringify(date.getMonth()+1)
                  }-${
                    JSON.stringify(date.getDate()).length === 1
                      ? "0" + JSON.stringify(date.getDate())
                      : JSON.stringify(date.getDate())
                  }`}
                  onChange={(event) => {
                    console.log(event.target);
                    // setDate(event.target.valueAsDate);
                    handleChange(event);
                  }}
                  disabled
                  name="indate"
                  id=""
                />
              </div>
              <div className="punchintime">
                <h4>Time:</h4>
                <input
                  onChange={handleChange}
                  value={`${
                    JSON.stringify(date.getHours()).length === 1
                      ? "0" + JSON.stringify(date.getHours())
                      : JSON.stringify(date.getHours())
                  }:${
                    JSON.stringify(date.getMinutes()).length === 1
                      ? "0" + JSON.stringify(date.getMinutes())
                      : JSON.stringify(date.getMinutes())
                  }`}
                  type="time"
                  disabled
                  name="intime"
                  id=""
                />
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
      </div>
    </>
  );
}

export default Punchin;
