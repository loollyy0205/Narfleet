import './Navbar.css';
import { NavLink } from 'react-router-dom'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import { Nav } from '../../../node_modules/react-bootstrap'

const Navbar = () => {
    return (
        <div className="nav">
            <div className="btn-nav Avenir">
                <NavLink exact to="/" style={{ textDecoration: 'none', color: 'white' }} activeClassName="active">
                    <p>NARFLEET HOME</p>
                </NavLink>

                <NavLink exact to="/about" style={{ textDecoration: 'none' }} activeClassName="active">
                    <p>ABOUT</p>
                </NavLink>

                {/* <NavLink exact to="/the-fleet" style={{ textDecoration: 'none' }} activeClassName="active">
                    <p>THE FLEET</p>
                </NavLink> */}
                
                <p>THE FLEET</p>
                <p>PROGRAMS</p>
                <p>STATIONS</p>
                <p>GALLERY</p>
                <p>ANNOUNCEMENTS</p>
                <p>CONTACT</p>
            </div>

            {/* <Nav className="Avenir nav">
                <Nav.Item>
                    <Nav.Link className="white-font Avenir-black">NARFLEET HOME</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link className="white-font">ABOUT</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link className="white-font">THE FLEET</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link className="white-font">PROGRAMS</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link className="white-font">STATIONS</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link className="white-font">GALLERY</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link className="white-font">ANNOUNCEMENTS</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link className="white-font">CONTACT</Nav.Link>
                </Nav.Item>
            </Nav> */}
        </div>

    )
}

export default Navbar
