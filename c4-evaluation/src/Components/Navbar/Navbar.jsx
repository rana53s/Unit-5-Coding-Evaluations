import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbarHome" to={"/"}>
        <button className="navbarHome" >Home</button>
      </Link>
      <Link className="navbarLoginSignUp" to={"/loginsignup"}>
        <button className="navbarLoginSignUp">Login/Sign Up</button>
      </Link>
    </div>
  );
};
