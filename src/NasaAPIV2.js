import { useState, useEffect } from "react";

export function NasaAPIV2()
{
    const [marsObject, setMarsObject] = useState([]);

    useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&quot;")
        .then(response => response.json())
        .then(data=> {
            setMarsObject(data.photos);
        })
    },[]);

    return(
        <div className="container-fluid">
            <h2>Mars Rover Photos</h2>
            <div className="d-flex flex-wrap">
                {
                    marsObject.map(item=>
                        <div className="card m-2 p-2 w-25">
                            <img src={item.img_src} className="card-img-top" height="160" />
                            <div className="card-body">
                                <dl>
                                    <dt>Camera Name</dt>
                                    <dd>{item.camera.full_name}</dd>
                                    <dt>Rover Name</dt>
                                    <dd>{item.rover.name}</dd>
                                </dl>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    )
}