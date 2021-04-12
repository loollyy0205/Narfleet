import './Footer.css'
import fb from '../../assets/Photos/fb.png'
import twitter from '../../assets/Photos/twitter.png'
import insta from '../../assets/Photos/insta.png'

const Footer = () => {
    return (
        <div className="footer-container Avenir">
            <div className="box-content">
                <div className="first-column">
                    <p>CONTACT US</p>
                    <p>The Marine Science <br/> Institute Velasquez St. <br/> University of the Philippines Diliman, Quezon City 1101 Philippines</p>
                    <p>msiadmin@msi.upd.edu.ph</p>
                </div>

                <div className="second-column">
                    <p>Administrative Office:</p>
                    <div>
                        <p>(632) 922-3959</p>
                        <p>(632) 981-8500 local 2903</p>
                        <p>Fax: (632) 924-7678</p>
                    </div>
                </div>
                
                <div className="third-column">
                    <p>ABOUT UP MSI</p>
                    <div>
                        <p>Who We Are</p>
                        <p>Our Courses</p>
                        <p>Areas of Research</p>
                        <p>Extension</p>
                        <p>Faculty</p>
                        <p>Staff</p>
                    </div>
                </div>
                
                <div className="third-column">
                    <p>RESOURCES</p>
                    <div>
                        <p>Publications</p>
                        <p>Library</p>
                        <p>Forms</p>
                        <p>Links</p>
                    </div>
                </div>

                <div className="last-column">
                    <img src={fb} alt="facebook logo" />
                    <img src={twitter} alt="twitter logo" />
                    <img src={insta} alt="instagram logo" />
                </div>
            </div>
        </div>
    )
}

export default Footer
