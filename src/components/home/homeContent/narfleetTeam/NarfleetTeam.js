import './NarfleetTeam.css'
import ocean from '../../../../assets/Photos/03-home-backdrop-ocean2.png'
import msilogo from '../../../../assets/Photos/msi-logo.png'

const NarfleetTeam = () => {
    return (
        <div>
            <div className="team-container">
                <div className="ocean">
                    <img src={ocean} alt="backdrop ocean" />
                </div>
                <div className="team-content">
                    <div className="green-container">
                        <div className="green-line"></div>
                    </div>
                    <p className="Optima-B">NARFLEET TWG AND ADVISORY BOARD</p>

                    {/* <div className="team-images-box">
                        <div className="team-images">
                            <img src={sirDeo} alt="Sir Deo" />
                            <img src={sirDeo2} alt="Sir Deo" />
                            <img src={sirDeo2} alt="Sir Deo" />
                        </div>
                    </div> */}

                    {/* <div className="team-softlight">
                        <img className="deo" src={sirDeo3} alt="Sir Deo" />
                    </div> */}

                    <div className="title-logos">
                        <div className="logo-sub">
                            <img src={msilogo} alt="sample"/>
                            <img src={msilogo} alt="sample"/>
                            <img src="https://res.cloudinary.com/upmsi/image/upload/v1645600719/Narfleet/Home/1200px-UP_Visayas_Logo.svg_wtxdln.png" alt="sample"/>
                            <img src="https://res.cloudinary.com/upmsi/image/upload/v1645600717/Narfleet/Home/seal-02_mn6oyp.png" alt="sample"/>
                            <img src= "https://res.cloudinary.com/upmsi/image/upload/v1645600718/Narfleet/Home/Bicol_University_np3slf.png" alt="sample"/>
                        </div>
                    </div>

                    <div className="team-title">
                        <div className="team-title-sub">
                            <div className="mid-subtitle">
                                <span className="Avenir-black">UP MSI</span>
                                <span className="Avenir-light top-4" >Lead Agency</span>
                            </div>
                            
                            <div className="mid-subtitle">
                                <span className="Avenir-black">NARFleet-CMO</span>
                                <span className="Avenir-light top-4" >Admin Department</span>
                            </div>
                            <div className="mid-subtitle">
                                <span className="Avenir-black">UP Visayas</span>
                                <span className="Avenir-light top-4" >Partner University</span>
                            </div>

                            <div className="mid-subtitle">
                                <span className="Avenir-black">MSU-IIT</span>
                                <span className="Avenir-light top-4" >Partner University</span>
                            </div>
                            
                            <div className="mid-subtitle">
                                <span className="Avenir-black">Bicol University</span>
                                <span className="Avenir-light top-4" >Partner University</span>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default NarfleetTeam
