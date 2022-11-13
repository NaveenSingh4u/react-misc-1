import { useState, useEffect } from "react";
import "./Shopping.css";

export function Shopping(){

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartItem, setCartItem] = useState({});

    function LoadCategories(){
        fetch("http://fakestoreapi.com/products/categories")
        .then(response => response.json())
        .then(data=> {
            data.unshift("all");
            setCategories(data);
        })
    }

    function LoadProducts(url){
        fetch(url)
        .then(response=> response.json())
        .then(data=>{
            setProducts(data);
        })
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts("http://fakestoreapi.com/products");
    },[])

    function CategoryChanged(event){
        if(event.target.value=="all") {
            LoadProducts("http://fakestoreapi.com/products");
        } else {
            LoadProducts(`http://fakestoreapi.com/products/category/${event.target.value}`);
        }
    }

    function AddToCartClick(event){
        fetch(`http://fakestoreapi.com/products/${event.target.id}`)
        .then(response=> response.json())
        .then(data=>{
            cartItems.push(data);
        })
        console.log(cartItems);
    }

    return(
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2">
                <h2><span className="bi bi-cart"></span> Shopping Online</h2>
            </header>
            <section className="row mt-2">
                <nav className="col-3">
                  <h3>Select Category</h3>
                  <select onChange={CategoryChanged} className="form-select">
                    {
                        categories.map(category=>
                            <option key={category} value={category} >{category.toUpperCase()}</option>
                            )
                    }
                  </select>
                </nav>
                <main className="col-9">
                  <div className="d-flex flex-wrap catalog">
                     {
                        products.map(product=>
                            <div key={product.id} className="card m-2 p-2 w-25">
                                <img src={product.image} className="card-img-top" height="140" />
                                <div className="card-header">
                                  <p>{product.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            <span className="bi bi-star-fill text-success"></span> {product.rating.rate} [{product.rating.count}]
                                        </dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button onClick={AddToCartClick} id={product.id} className="btn btn-danger w-100">
                                        <span className="bi bi-cart4"></span>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            )
                     }
                  </div>
                </main>
            </section>
        </div>
    )
}