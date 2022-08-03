import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "../style/attendance.css";
function Myrecords() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log(date - new Date("Tue Aug 02 2022 16:42:21 GMT+0530"));
  }, [date]);
  return (
    <>
      <div className="myrecord">
        <div className="myrecordheader">
          <label>
            <h3>My Attendance Records</h3>
          </label>
          <div className="mydate">
            {/* <h4>Date:</h4> */}
            <Calendar onChange={setDate} value={date} className="calander" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Myrecords;
