import { useEffect, useState } from "react";

export function NSEAPI() {
    const[stockObject, []] = useState([]);

    useEffect(() => fetch('https://api.polygon.io/v3/trades/AAPL?apiKey=rojlMIzpsKilTEplyOS1KmxVV33fW6tk')
    .then(data => data.json)
    .then(setObject[json]));
}