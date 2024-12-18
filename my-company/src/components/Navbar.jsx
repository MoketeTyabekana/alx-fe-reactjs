import { Outlet, Link } from "react-router-dom";


const Navbar  = () => {
  return (
    <>
      <nav style={{padding:'10px 40px', width:'100%', backgroundColor:'#00567B'}}>
        <ul style={{display:'flex', listStyle:'none', gap:'25px', justifyContent:'start',textDecoration:'none'}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>

          <li>
            <Link to="Contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar ;
