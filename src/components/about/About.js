import AboutBanner from "./about-banner/AboutBanner"
import AboutContent from "./about-content/AboutContent"
import AboutSearch from "./about-search/AboutSearch"
import ExploreNext from "./explore-next/ExploreNext"

const About = () => {
    return (
        <div>
            <AboutBanner />
            <AboutSearch />
            <AboutContent />
            <ExploreNext />
        </div>
    )
}

export default About
