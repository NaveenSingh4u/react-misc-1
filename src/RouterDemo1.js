import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export function RouterDemo1() {
    return (<div className="container-fluid">
      <h2>Choose your dream 11 players.</h2>
      <BrowserRouter>
      <nav>
        <span><Link to="wicketkiper">wicketkiper</Link></span>
        <span> | </span>
        <span><Link to="batsman">batsman</Link></span>
        <span> | </span>
        <span><Link to="allrounder">allrounder</Link></span>
        <span> | </span>
        <span><Link to="bowler">bowler</Link></span>
      </nav>
      <section>
        <Routes>
            <Route path="/wicketkiper" element= {<div><p>Adam Gilchrist, Rahul dravid, MS Dhoni</p></div>}></Route>
            <Route path="/batsman" element= {<div><p>Methew Heden, Virender Sahwag, Sachin tendulakar, Ricki ponting</p></div>}></Route>
            <Route path="/allrounder" element= {<div><p>Andrew symonds, Ravindra Jadega</p></div>}></Route>
            <Route path="/bowler" element= {<div><p>Michel jonson, Glenn Mackgrath, Harbhajan Singh, Zahir khan</p></div>}></Route>
        </Routes>
      </section>
      </BrowserRouter>
    </div>);
}