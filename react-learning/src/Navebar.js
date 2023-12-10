import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <h1>Blogs</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blogs</Link>
      </div>
    </div>
  );
};
export default Navbar;
