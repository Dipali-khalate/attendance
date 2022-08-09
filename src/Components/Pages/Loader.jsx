import React, { useEffect, useState } from 'react'

function Loader(props) {
    const [style,setStyle] = useState('flex')
    const fixedStyle = {
        width:'100%',
        height:'100vh',
        position:'fixed',
        top:'0',
        left:'0',
        alignItems:'center',
        justifyContent:'center',
        background:'rgba(0, 155, 238, 0.467)'
    }
    useEffect(() => {
        if(props.data){
            setStyle('flex')
        }else{
            setStyle('none')
        }
    }, [props.data])
    return (
    <div style={{...fixedStyle, display:style}}>

    </div>
  )
}

export default Loader