import React from "react";
import "../style/attconfig.css";
function Attconfig() {
  return (
    <>
      <div className="configmain">
        <div className="configheader">
          <h3>Attendance Configuration</h3>
        </div>
        <div className="configcontainer">
          <div className="config1">
            <input type="checkbox" name="" id="punchin" />
            <label htmlFor="punchin">
              Employee can change your current time when punchin IN/OUT
            </label>
          </div>
          <div className="config2">
            <input type="checkbox" name="" id="deleterec" />
            <label htmlFor="deleterec">
              Employee can Edit/Delete own attendance records
            </label>
          </div>
          <div className="config3">
            <input type="checkbox" name="" id="subordinate" />
            <label htmlFor="subordinate">
              Supervisor can Add/Edit/Delete attendance records of subordinates
            </label>
          </div>
          <div className="configbtn">
            <button>Save</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Attconfig;
