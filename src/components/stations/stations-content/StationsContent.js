import './StationsContent.css'
import map from '../../../assets/Photos/station/map.png'
import { StationsCard } from './StationContentModel'

const AboutContent2 = () => {
    return (
        
        
        <div className="station-container">
            
            <div className=" line"></div>

            <div className="aboutMap">
                <div className="aboutMap-card">
                
                </div>
                <div className="aboutMap-card">
              
                </div>
                <div className="aboutMap-card">
         
                </div>
                <div className="aboutMap-card">

                </div>
                <div className="aboutMap-card">
       
                </div>
                <div className="aboutMap-card">
            
                </div>
                <div className="aboutMap-card">
         
                </div>
         </div>

         <div className="aboutMap">
                <div className="aboutMap-card2">
                    <p className="Avenir-medium">Mooring Station I</p>
                    <p className="Avenir-light"> Bolinao Pangasinan</p>
                </div>
                <div className="aboutMap-card2">
                    <p className="Avenir-medium">Mooring Station II</p>
                    <p className="Avenir-light"> Subic Zambales</p>
                </div>
                <div className="aboutMap-card2">
                    <p className="Avenir-medium">Panata</p>
                    <p className="Avenir-light"> Navotas Fish Port</p>
                </div>
                <div className="aboutMap-card2">
                    <p className="Avenir-medium">Catamaran</p>
                    <p className="Avenir-light"> Puerto Gallera <br></br> Oriental Mindoro</p>
                </div>
                <div className="aboutMap-card2">
                    <p className="Avenir-medium">Large Vessel</p>
                    <p className="Avenir-light"> Gubat, Sorsogon</p>
                </div>
                <div className="aboutMap-card2">
                    <p className="Avenir-medium">Medium Vessel I</p>
                    <p className="Avenir-light"> Iloilo City</p>
                </div>
                <div className="aboutMap-card2">
                    <p className="Avenir-medium">Medium Vessel II</p>
                    <p className="Avenir-light"> Iligan, Lanao del Norte</p>
                </div>
         </div>
         

         <div className="aboutMap">
                <div className="aboutMap-pin">
                    <p className="Avenir-medium"></p>
                </div>
                <div className="aboutMap-pin">
                    <p className="Avenir-medium"></p>
                </div>
                <div className="aboutMap-pin">
                    <p className="Avenir-medium"></p>
                </div>
                <div className="aboutMap-pin">
                    <p className="Avenir-medium"></p>
                </div>
                <div className="aboutMap-pin">
                    <p className="Avenir-medium"></p>
                </div>
                <div className="aboutMap-pin">
                    <p className="Avenir-medium"></p>
                </div>
                <div className="aboutMap-pin">
                    <p className="Avenir-medium"></p>
                </div>
         </div>




            <img src={map} alt="map"className="map"/>
            <div className="aboutCard">
                    
             {StationsCard.map((item, index) =>{
                 return(
                <div className='aboutContent-card2-1'>
                    <div className="padding-about-card2">
                        <p className="Avenir-medium"><ul> <li>{item.title}</li></ul>
                            <span className="Avenir-light">{item.subtitle}</span>
                        </p>
                        <p className="Avenir-light">{item.paragraph}</p>
                    </div>
                </div>
                 )
                })}
            </div>
            
        </div>
        
    )
}

export default AboutContent2



/*
import './StationsContent.css'
const StationsContent = () => {
    return (
        <div className="stationscontent-cotainer">
            
        </div>
    )
}

export default StationsContent*/
