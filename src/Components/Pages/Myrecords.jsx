import React from "react";
import "../style/attendance.css";
function Myrecords() {
  return (
    <>
      <div className="myrecord">
        <div className="myrecordheader">
          <label>
            <h3>My Attendance Records</h3>
          </label>
          <div className="mydate">
            <h4>Date:</h4>
            <input type="date" name="" id="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Myrecords;
