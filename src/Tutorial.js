import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export function Tutorial(){
    return(
        <div className="container-fluid">
          <h2>Web Technologies - Tutorial</h2>
          <BrowserRouter>
             <nav>
                <span> <Link to="html">HTML</Link> </span>
                <span>|</span>
                <span> <Link to="css">CSS</Link> </span>
                <span>|</span>
                <span> <Link to="react">React</Link> </span>
             </nav>
             <hr />
             <section>
                <Routes>
                    <Route path="/html" element={<div><h2>HTML</h2><p>It is a markup language.</p></div>} />
                    <Route path="/css" element={<div><h2>CSS</h2><p>It defines styles form HTML.</p></div>} />
                    <Route path="/react" element={<div><h2>React</h2><p>It is a JavaScript library.</p></div>} />
                    <Route path="/" element={<div><p>Browse our online tutorials</p></div>} />
                </Routes>
             </section>
          </BrowserRouter>
        </div>
    )
}