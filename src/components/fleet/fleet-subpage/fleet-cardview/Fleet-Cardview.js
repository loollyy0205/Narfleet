import './Fleet-Cardview.css'
import { useState } from 'react'
import hope1 from '../../../../assets/Photos/programs/02-hope-wps-photo.jpg'
import primer from '../../../../assets/Photos/programs/03-primer-photo.jpg'


const ProgramsContent2 = () => {
    const [content] = useState([
        {title: 'HOPE WPS | 2021-2023', 
        subTitle: 'High Priority Oceanic Partnerships for the Environments of the WPS',
        context: 'The program has seven (7) projects that generally aims to further understand the ecology and biodiversity of the KIG and adjacent seas in the west Philippine sea. It will also include studies on threats such as climate change and plastics pollution. Part of the funds will be dedicated in refurbishing and repairing the old Pagasa marine laboratory and station, and capacity building and upgrading of SUCs and HEIs.',
        photo: hope1,
        status: 'ONGOING',
        background: 'title-blue Avenir-medium',
        },
        {title: 'PRIMER | 2021-2023', 
        subTitle: 'Philippine Rise Integrated Marine Research',
        context: 'This program aims to continue exploring the hidden diversity, understand ecological importance, and implications to the food security of the Philippine Rise. The program employs an interdisciplinary approach from to understand the interactions between the habitats and the oceanographic processes that shape its dynamics. It will also include a component to train and develop expertise for ocean and marine research in HEIs and SUCs.',
        photo: primer,
        status: 'ACCOMPLISHED',
        background: 'title-green Avenir-medium',
        },
    ])

    return (
        <div>
            <div className='programs-container-2'>
            
                {content.map( (progCont, i) => (
                    <div key={`some-content${i}`} className="programs-content-2">
                         <div className={progCont.background}>{progCont.status}</div>
                        <div className="left-image-2">
                            <img src={progCont.photo} alt='hopo wps' />
                        </div>

                        <div className="programs-context-2">
                            <div className="green-color">
                                <p className="green-color">
                                    <span className="programs-title-2">{progCont.title}
                                    </span> <span className="title-sub2">{progCont.subTitle}</span>
                                </p>
                            </div>

                            <p className="title-content-programs-2">{progCont.context}</p>

                            <p className="learn-more-2 Avenir-light">LEARN MORE</p>
                        </div>
                    </div>
                ))}    
            </div>
        </div>
    )
}

export default ProgramsContent2
