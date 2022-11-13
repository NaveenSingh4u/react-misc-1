import { useState, useEffect } from "react";

export function NasaAPIV1()
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
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>Camera</th>
                        <th>Rover</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        marsObject.map(item=>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    <a href={item.img_src} target="_blank">
                                    <img src={item.img_src} width="100" height="100" />
                                    </a>
                                </td>
                                <td>
                                    {item.camera.full_name}
                                </td>
                                <td>
                                    {item.rover.name}
                                </td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}