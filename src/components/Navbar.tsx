import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        All
      </Link>
      <Link to="/?todos=active" className="nav-link">
        Active
      </Link>
      <Link to="/?todos=completed" className="nav-link">
        Completed
      </Link>
    </nav>
  );
};

export default Navbar;


