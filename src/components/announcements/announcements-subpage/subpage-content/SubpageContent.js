import { MdNavigateBefore } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { SubpageData } from './SubpageContentModel'
import AboutSearch from '../../../about/about-search/AboutSearch'
import './SubpageContent.css'


const SubpageContent = () => {

  

    return (
        <div>
            <div style={{display: 'grid', justifyContent: 'center'}}>
            <AboutSearch />
                <div className="announcement-subpage-container" style={{color:'white'}}>
                    {SubpageData.map((item, index) =>{
                        return(
                        <div className="announcement-subpage-card">
                            <div className="announcement-subpage-label Avenir-medium"> {item.label} </div>
                            <NavLink exact to="/announcements" className="announcement-arrow-back">
                                    <MdNavigateBefore className="next-icon"/>    
                            </NavLink>
                            <div className="announcement-subpage-title">
                                <p className="Avenir-medium">{item.title}</p>
                                <p className="Avenir-medium">{item.susbtitle}</p>
                            </div>
                            <div className="announcement-subpage-image">
                                <img src={item.img} alt='hopo wps' />
                            </div>
                            <div className="announcement-subpage-white-container-bg Avenir-light">
                                <p> {item.whiteBgText} </p>
                            </div>
                            <div className="announcement-text-content Avenir-light">
                                <p>{item.p1}</p>
                                <p>{item.p2}</p>
                                <p>{item.p3}</p>
                                <p>{item.p4}</p>
                                <p>{item.p5}</p>
                                <p>{item.p6}</p>
                                <p>{item.p7}</p>
                                <p>{item.p8}</p>
                            </div>
                        </div>
                      )
                    })} 
                </div>
                <div class="subpage-related">
                    <div class="related-box">
                        <div className="announcement-related-label-1 Avenir-medium"> RELATED FEATURES </div>
                       
                    </div>
                    <div class="related-box">
                        <div className="image-filter"></div>
                        <div className="announcement-related-label-2 Avenir-medium"> RELATED NEWS </div>
                        <div className="related-title-text-2 Optima-B">NARFLEET ON ACTIONS <span> | </span> NEWS </div>
                        <div className="related-caption-text-2 Avenir-light">Filipino marine scientists venture to West PHL Sea for research, calls for #ProtectWPS</div>
                        <div className="related-author-text-2  Avenir-light">By Yvette Geroleo</div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default SubpageContent
