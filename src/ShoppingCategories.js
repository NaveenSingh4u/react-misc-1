import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function ShoppingCategories(){
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch("http://fakestoreapi.com/products/categories")
        .then(response=>response.json())
        .then(data=>{
            setCategories(data);
        })
    },[])
    return(
        <div>
          <ul className="list-unstyled">
            {
                categories.map(category=>
                    <li className="btn btn-dark mb-2 w-25 d-block" key={category}> <Link to={"/products/" + category}>{category}</Link> </li>
                    )
            }
          </ul>
        </div>
    )
}