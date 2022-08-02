import React from 'react';
import "../style/Viewattrecord.css";
function Viewattrecord() {
  return (
    <>
     <div className="viewrecordmain">
        <div className="viewrecheader">
            View Attendance Record
        </div>
        <div className="recorddata">
            <div className="empname">
                <label>Employee Name:</label>
                <input type="text" name="" id="" placeholder='Type for hints..'/>
            </div>
            <div className="empdate">
                <label>Date:</label>
                <input type="date" name="" id="" />
            </div>
            <div className="requiredf">
                <label>*Required Fields</label>
            </div>
            <div className="recordbtn">
              <button>View</button>  
            </div>
        </div>
        <div className="recordfooter">
            <div className="footerhead">
                <table>
                    <tr>
                        <th>Employee Name</th>
                        <th>Punch In</th>
                        <th>Punch In Note</th>
                        <th>Punch Out Note</th>
                        <th>Duration(Hours)</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>No Record Found</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
        </div> 
    </>
  );
}

export default Viewattrecord;
