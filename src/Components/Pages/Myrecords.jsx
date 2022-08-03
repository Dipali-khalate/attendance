import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "../style/attendance.css";
import Punchin from "./Punchin";
import Punchout from "./Punchout";
// import { useNavigate } from "react-router-dom";

function Myrecords() {
  const [selecteddate, setselectedDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  const [showmodel, setshowModel] = useState({ model: false, inout: true });

  // const navigate = useNavigate();

  const handleClick = (date) => {
    // console.log(date);
    // console.log(date.getDate() - currentDate.getDate());
    let clickDate = date - currentDate;
    let isToday = date.getDate() - currentDate.getDate();
    let clickMonth = date.getMonth() - currentDate.getMonth();

    console.log(clickDate);
    console.log("month", clickMonth);

    if (isToday === 0 && clickMonth === 0) {
      console.log("today");
      // navigate("/punchin");
      setshowModel({ ...showmodel, model: true });
    } else if (clickDate < 0) {
      console.log("previousDate");
    } else {
      console.log("futuredate");
    }
  };
  return (
    <>
      <div className="myrecord">
        {showmodel.model &&
          (showmodel.inout ? (
            <Punchin setshowModel={setshowModel} showmodel={showmodel} />
          ) : (
            <Punchout setshowModel={setshowModel} showmodel={showmodel} />
          ))}
        <div className="myrecordheader">
          <label>
            <h3>My Attendance Records</h3>
          </label>
          <div className="mydate">
            {/* <h4>Date:</h4> */}
            <Calendar
              onChange={setselectedDate}
              value={selecteddate}
              onClickDay={handleClick}
              tileClassName={({ activeStartDate, date, view }) =>
                date.getDate() - currentDate.getDate() === 0 &&
                date.getMonth() - currentDate.getMonth() === 0
                  ? "current"
                  : (date.getDate() - currentDate.getDate() < 0 ||
                      date.getMonth() - currentDate.getMonth() < 0) &&
                    !(date.getMonth() - currentDate.getMonth() > 0)
                  ? "previous"
                  : "next"
              }
              className="calander"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Myrecords;
