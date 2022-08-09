import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/punchin.css";
import {BiCurrentLocation} from 'react-icons/bi'
import CameraAuth from "../cameraAuth/CameraAuth";
import Loader from "./Loader";
// import { GoogleMap } from "react-google-maps";
import { WithGoogleMapProps } from "react-google-maps";
import { GoogleComponent } from "react-google-location";

// import {
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";

// const MapWithAMarker = withGoogleMap(props =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     <Marker
//       position={{ lat: -34.397, lng: 150.644 }}
//     />
//   </GoogleMap>
// );


function Punchin(props) {
  const [punchin, setPunchin] = useState({});
  const [date, setDate] = useState(new Date());
  const [userdata, setuserData] = useState()
  const [loader,setLoader] = useState(false)
  const [coords,setCoords] = useState()
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPunchin({ ...punchin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {

    console.log(punchin);
    // axios
    //   .post("", punchin)
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((data) => {
    //     console.log(data);
    //   });
    // const response = await fetch("http://localhost:80/", {
      setLoader(true)
      setTimeout(()=>{
        setLoader(false)
      },4000)
    const response = await fetch("http://3.93.232.242/", {
      method: "POST",
      body: userdata,
    });

    const data = await response.json();
    setLoader(false)
    if (response.status === 200) {
      // navigator.geolocation.getCurrentPosition(({ coords }) => {
        alert(
          data.attendanceMarked
            ? `Attendance Marked! with coordinates ${coords.latitude} and ${coords.longitude}`
            : `Attendance Not Marked! with coordinates ${coords.latitude} and ${coords.longitude}`
        );
        
        data.attendanceMarked && props.setshowModel({ ...props.shomodel, model: false, inout: false })
      // });
    } else {
      alert(data.err);
    }
    
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(c=>{setCoords(c.coords)})
    setPunchin({
      ...punchin,
      indate: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
      intime: `${date.getHours()}:${date.getMinutes()}`,
    });
  }, [])
  
  return (
    <>
    
      <div className="mypunchin">
        <div className="bg"></div>
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
                value={`${date.getFullYear()}-${JSON.stringify(date.getMonth()).length === 1
                  ? "0" + JSON.stringify(date.getMonth() + 1)
                  : JSON.stringify(date.getMonth() + 1)
                  }-${JSON.stringify(date.getDate()).length === 1
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
                value={`${JSON.stringify(date.getHours()).length === 1
                  ? "0" + JSON.stringify(date.getHours())
                  : JSON.stringify(date.getHours())
                  }:${JSON.stringify(date.getMinutes()).length === 1
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
            <div className="location">
            <BiCurrentLocation />
            <span style={{color:'#fff',textAlign:'center',margin:'10px'}}> {coords && coords.latitude} { coords && coords.longitude} </span>
            </div>
          </div>
          <CameraAuth setData={setuserData} data={userdata} />
          <div className="punchinbtn">
            <button onClick={() => props.setshowModel({ ...props.showmodel, inout: false })}>Out</button>
            <button onClick={handleSubmit} style={{ background: "#008000" }}>Save</button>
          </div>
        </div>
        {/* </div> */}
      </div>
    <Loader data={loader} />

    </>
  );
}

export default Punchin;
