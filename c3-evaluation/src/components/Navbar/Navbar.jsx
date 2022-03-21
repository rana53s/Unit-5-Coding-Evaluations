import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div
        style={{ 
          display: "flex",
          justifyContent: "space-evenly",
          gap: "10px",
          width: "100%",
          backgroundColor: "red"
        }}
        className="navbar">
        <Link to="/"><button className="home" >Home</button></Link>
        <Link to="/mystery"><button className="mystery">Mystery</button></Link>
        <Link to="/technology"><button className="technology">Technology</button></Link>
        <Link to="/mythology"><button className="mythology">Mythology</button></Link>
        <Link to="/history"><button className="history">History</button></Link>
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </div>
    </>
  );
};
