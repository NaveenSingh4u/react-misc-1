import { Link } from "react-router-dom";

export function ShoppingHome(){
    return(
        <div className="row">
            <div className="col">
               <div className="card">
                 <img src="images/fashion2.jpg" className="card-img-top" style={{height:'300px'}} />
                 <div className="card-footer text-center">
                    <Link to="/men" className="btn btn-info w-100">Men's</Link>
                 </div>
               </div>
            </div>
            <div className="col">
               <div className="card">
                 <img src="images/fashion1.jpg" className="card-img-top" style={{height:'300px'}} />
                 <div className="card-footer">
                 <Link to="/women" className="btn btn-success w-100">Women's</Link>
                 </div>
               </div>
            </div>
            <div className="col">
               <div className="card">
                 <img src="images/fashion3.png" className="card-img-top" style={{height:'300px'}} />
                 <div className="card-footer">
                    <button className="btn btn-warning w-100">Kid's</button>
                 </div>
               </div>
            </div>
        </div>
    )
}