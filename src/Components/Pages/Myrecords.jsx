import React, { useState } from "react";
import Calendar from "react-calendar";
import "../style/attendance.css";
function Myrecords() {
  const [selecteddate,setselectedDate] = useState(new Date())
  const [currentDate,setCurrentDate] = useState(new Date())
  return (
    <>
      <div className="myrecord">
        <div className="myrecordheader">
          <label>
            <h3>My Attendance Records</h3>
          </label>
          <div className="mydate">
            {/* <h4>Date:</h4> */}
            <Calendar onChange={setselectedDate} value={selecteddate} onClickDay={(date,event)=>alert(date.getDate()+ ' ' +(date.getMonth()+1))} tileClassName={({activeStartDate, date, view }) => date.getDate() === currentDate.getDate() && date.getMonth() ===currentDate.getMonth() ? "current":""}  className="calander" />

          </div>
        </div>
      </div>
    </>
  );
}

export default Myrecords;
