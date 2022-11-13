import { useState } from "react";

export function TwoWayDataBinding(){
   
    const [product, setProduct] = useState({Name:"TV", Price:0, Stock:true, City:"Hyd"});
    const [cities] = useState(["Hyd","Delhi","Mumbai"]);
    const [coffeeData, setCoffeeData] = useState({ 
      "coffee": {
          "region": [
              {"id":1,"name":"John Doe"},
              {"id":2,"name":"Don Joeh"}
          ],
          "country": {"id":2,"company":"ACME"}
      }, 
      "brewing": {
          "region": [
              {"id":1,"name":"John Doe"},
              {"id":2,"name":"Don Joeh"}
          ],
          "country": {"id":2,"company":"ACME"}
      }
  }); 
    
    function handleNameChange(event){
        setProduct({
            Name: event.target.value,
            Price: product.Price,
            Stock: product.Stock,
            City: product.City
        })
    }
    function handlePriceChange(event){
        setProduct({
            Name: product.Name,
            Price: event.target.value,
            Stock: product.Stock,
            City: product.City
        })
    }
    function handleStockChange(event){
        setProduct({
            Name: product.Name,
            Price: product.Price,
            Stock: event.target.checked,
            City: product.City
        })
    }
    function handleCityChange(event){
        setProduct({
            Name: product.Name,
            Price: product.Price,
            Stock: product.Stock,
            City: event.target.value
        })
    }
    function handleNameBlur(){
        alert("Name Entered Successfully..");
    }
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h3>Register Product</h3>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" value={product.Name} onBlur={handleNameBlur}  onChange={handleNameChange}  className="form-control" /></dd>
                        <dt>Price</dt>
                        <dd><input type="text" value={product.Price} onChange={handlePriceChange}  className="form-control" /></dd>
                        <dt>Stock</dt>
                        <dd className="form-switch"><input className="form-check-input" checked={product.Stock} onChange={handleStockChange}  type="checkbox"/> Available </dd>
                        <dt>Shipped To</dt>
                        <dd>
                            <select onChange={handleCityChange} value={product.City} className="form-select">
                                {
                                    cities.map(city=>
                                        <option key={city}>{city}</option>
                                        )
                                }
                            </select>
                        </dd>
                    </dl>
                </div>
                <div className="col-9">
                    <h3>Product Details</h3>
                    <dl>
                        <dt>Name</dt>
                        <dd>{product.Name}</dd>
                        <dt>Price</dt>
                        <dd>{product.Price}</dd>
                        <dt>Stock</dt>
                        <dd>{(product.Stock==true)?"Available":"Out of Stock"}</dd>
                        <dt>Shipped To</dt>
                        <dd>{product.City}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}