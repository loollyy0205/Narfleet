import './Banner.css'
import upLogo from '../../../assets/Photos/up-logo.png'
import nslLogo from '../../../assets/Photos/nsl-logo.png'
import msiLogo from '../../../assets/Photos/msi-logo.png'

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="logos">
                <img src={upLogo} alt="sample" height="90" width="90"/>
                <img src={msiLogo} alt="sample" height="90" width="90"/>
                <img src={nslLogo} alt="sample" height="90" width="90"/>
            </div>

            <p className="title Optima-B">National Academic Research Fleet</p>
            <p className="subtitle Avenir-oblique">Charting New Waters</p>
        </div>
    )
}

export default Banner
