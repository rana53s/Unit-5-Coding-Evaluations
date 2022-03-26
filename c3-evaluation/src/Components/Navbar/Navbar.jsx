import { Link } from "react-router-dom";
import './navbar.css'

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/"><button className="home" >Home</button></Link>
        {/* <button className="home" ><Link to="/">Home</Link></button> */}
        <Link to="/section/mystery"><button className="mystery" >Mystery</button></Link>
        {/* <button className="mystery" ><Link to="/section/mystery">Mystery</Link></button> */}
        <button className="technology" ><Link to="/section/technology">Technology</Link></button>
        <button className="mythology" ><Link to="/section/mythology">Mythology</Link></button>
        <button className="history" ><Link to="/section/history">History</Link></button>
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </div>
    </>
  );
};
