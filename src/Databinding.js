export function DataBinding(){
    
    const products = [
       {Name: "Model 1", Price:5600.32, Photo:"../g9.jpg", Rating:{Rate:4.2, Count:3000}},
       {Name: "Model 2", Price:7000.42, Photo:"../g10.jpg", Rating:{Rate:3.6, Count:6020}},
       {Name: "Model 3", Price:2400.44, Photo:"../g11.jpg", Rating:{Rate:4.6, Count: 446}}
    ];
    return(
        <div className="container-fluid">
           <h2>Cards</h2>
           <div className="d-flex flex-warp">
              {
                 products.map(product=>
                   <div className="card p-2 m-2 w-25">
                      <img src={product.Photo} className="card-img-top" height="150" />
                      <div className="card-header">
                         <h3>{product.Name}</h3>
                      </div>
                      <div className="card-body">
                        <dl>
                           <dt>Price</dt>
                           <dd>{product.Price}</dd>
                           <dt>Rating</dt>
                           <dd>
                              <span className="bi bi-star-fill text-success"></span> {product.Rating.Rate} [{product.Rating.Count}]
                           </dd>
                        </dl>
                      </div>
                      <div className="card-footer">
                        <button className="btn btn-danger w-100">
                           <span className="bi bi-cart4"></span> Add to Cart
                        </button>
                      </div>
                   </div>
                  )
              }
           </div>
        </div>
    )
}
