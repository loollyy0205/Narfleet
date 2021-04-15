import './Navbar.css';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import { Nav } from '../../../node_modules/react-bootstrap'

const Navbar = () => {
    return (
        <div className="nav">
            <div className="btn-nav">
                <p className="Avenir-black">NARFLEET HOME</p>
                <p className="Avenir">ABOUT</p>
                <p className="Avenir">THE FLEET</p>
                <p className="Avenir">PROGRAMS</p>
                <p className="Avenir">STATIONS</p>
                <p className="Avenir">GALLERY</p>
                <p className="Avenir">ANNOUNCEMENTS</p>
                <p className="Avenir">CONTACT</p>
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
