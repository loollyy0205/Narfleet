import './homeContent.css'
import HomseSideContent from './homeSideContent/HomseSideContent'
import NarfleetTeam from './narfleetTeam/NarfleetTeam'
import News from './news/News'
import RVphotos from './RVphotos/RVphotos'
import Search from './search/Search'


const HomeContent = () => {
    return (
        <div>
            <div className="homecontent-center-box">
                <div className="homeContent-container">
                    <div className="row-content">
                        <Search />
                        <div>
                            <RVphotos />
                            <News />
                        </div>
                    </div>
                    <HomseSideContent />
                </div>
            </div>
            
            <NarfleetTeam />
        </div>
    )
}

export default HomeContent
