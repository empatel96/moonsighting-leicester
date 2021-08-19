import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Moonsighting Leicester</h1>
      <div className="links">
        <Link to="/">Home</Link>
        {/* <Link
          to="/create"
        >
          New Location
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
