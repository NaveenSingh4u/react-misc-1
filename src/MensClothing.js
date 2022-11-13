import { useEffect, useState } from "react"

export function MensClothing(){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("http://fakestoreapi.com/products/category/men's%20clothing")
        .then(response=>response.json())
        .then(data=>{
            setProducts(data);
        })
    },[])
    return(
        <div className="container-fluid">
            <h2>Men's Clothing</h2>
           <div className="d-flex flex-wrap">
             {
                products.map(product=> 
                    <div className="card m-2" style={{width:'150px'}}>
                    <img src={product.image} height="120" className="card-img-to" />
                     <div className="card-header">
                        <p>{product.title}</p>
                     </div>
                    </div> 
                    )
             }
           </div>
        </div>
    )
}