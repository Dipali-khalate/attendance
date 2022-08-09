import React from 'react'
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import {BiRevision} from 'react-icons/bi'
import { useState } from "react";

function CameraAuth(props) {
    const [person, setPerson] = useState("antrixsh");
    const [ispreview,setIspreview] = useState(false)
    const [img,setImg] = useState()
    const convertDataURIToBinary = (dataURI) => {
        const BASE64_MARKER = ";base64,";
        const base64Index =
            dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
        const base64 = dataURI.substring(base64Index);
        const raw = window.atob(base64);
        const rawLength = raw.length;
        const array = new Uint8Array(new ArrayBuffer(rawLength));
        for (let i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }
        console.log(array)
        return array;
    };
    const handleTakePhoto = async (dataUri) => {
        setImg(dataUri)
        const fromData = new FormData();
        fromData.append("person", person);
        fromData.append("image", new Blob([convertDataURIToBinary(dataUri)]));
        props.setData(fromData)
    };
    return (
        <div className="camera-auth">
            <div className="select-person">
                {/* <label htmlFor="person">Mark attendance as:</label> */}
                <select
                    id="person"
                    onChange={(e) => {
                        setPerson(
                            e.target.options[e.target.options.selectedIndex]
                                .value
                        );
                    }}
                >
                    <option value="antrixsh">antrixsh</option>
                    <option value="vishwas">vishwas</option>
                    <option value="chinmay">chinmay</option>
                    <option value="manoj">manoj</option>
                    <option value="naman">naman</option>
                    <option value="varun">varun</option>
                    <option value="vinit">vinit</option>
                </select>
            </div>
            {ispreview ? <div className='camera'><img src={img} alt="" /> <span onClick={()=>{setIspreview(false);props.setData()}} className="resetbtn"><BiRevision /></span></div> :<Camera className="camera" isImageMirror={true}  onTakePhotoAnimationDone={()=>setIspreview(true)}
                onTakePhoto={(dataUri) => {
                    handleTakePhoto(dataUri);
                }}
            />}
        </div>
    );
}

export default CameraAuth