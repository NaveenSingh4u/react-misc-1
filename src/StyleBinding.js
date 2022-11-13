import { useState } from "react"

export function StyleBinding()
{
    const [styleObj, setStyleObj] = useState({position:'', top:'', left:''});
    function GetPosition(e){
        setStyleObj({
            position: 'fixed',
            left: e.clientX + 'px',
            top: e.clientY + 'px'
        })
    }
    return(
        <div onMouseMove={GetPosition}>
            <div style={{height:"1000px"}}></div>
            <img style={styleObj} width="50" height="50" src="images/flag.gif"/>
        </div>
    )
}