import './GalleryCarousel.css'
import Carousel from 'react-elastic-carousel';
import { Carousel1, Carousel2, Carousel3 } from './GalleryCarouselModel'
// import Slider from "react-slick";

const GalleryCarousel = () => {

  // const photos = [
  //   {
  //     name: "Photo 1",
  //     url: "https://media.istockphoto.com/photos/the-first-part-of-any-design-picture-id1363890890?k=20&m=1363890890&s=612x612&w=0&h=fSPUwO36EA-6eQNOuV5rE8-eC33hqB2hA-931mo6-n4="
  //   },
  //   {
  //     name: "Photo 2",
  //     url: "https://media.istockphoto.com/photos/businessman-signing-digital-contract-on-tablet-using-stylus-pen-picture-id1269145054?k=20&m=1269145054&s=612x612&w=0&h=G08IDhKFJPYcaocD03NqIe9Z4MtTibG8GifsLjxIAnM="
  //   },
  //   {
  //     name: "Photo 3",
  //     url: "https://media.istockphoto.com/photos/architect-man-picture-id1257151480?k=20&m=1257151480&s=612x612&w=0&h=FMmiQQW33qULohHodShTSBedPJSQbOu83wY8DwnVOw0="
  //   },
  //   {
  //     name: "Photo 4",
  //     url: "https://media.istockphoto.com/photos/close-up-of-lady-putting-a-signature-picture-id1190906607?k=20&m=1190906607&s=612x612&w=0&h=cpIyTLoAqJx-5yazTne-KFmTOFQJScckNpWY4m1BQn4="
  //   }
  // ]

  const breakPoints = [
    { width: 1400, itemsToShow: 3.43}
  ];

  // const settings = {
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "578px",
  //   slidesToShow: 1,
  //   speed: 300
  // };


    return (
        <div>
          <div className="slider">
              {/* <Slider {...settings}>
              {
                photos.map((photos) => {
                  return(
                  <div className="slider-img"> 
                    <img width="740px" height="450px" src={photos.url}/> 
                  </div>
                  )
                })}
            </Slider> */}
           </div>
            <div className='gallery-container-1'>
                <div className="gallery-content-1">
                    <div className="title-green-1 Avenir-medium">PHOTOS FROM KASARINLAN</div>
                    <div className="title-green-2 Avenir-light">By Jue Lalas</div>
                    <div className="carousel-card-1">
                        <Carousel itemsToShow={3} pagination={false} showArrows={false} breakPoints={breakPoints}>
                        {Carousel1.map((item, index) =>{
                             return(
                                <div className="image-1">
                                    <img src={item.photo} alt="gallery-01"/>
                                    <div className="image__overlay-1">
                                        <div className="image__title-1 Avenir">{item.title}</div>
                                    </div>
                                </div>
                              )
                            })}  
                        </Carousel>
                    </div>
                </div>
                <div className="gallery-content-1">
                    <div className="title-green-1 Avenir-medium">PHILIPPINES RISE</div>
                    <div className="title-green-2 Avenir-light">By Jue Lalas</div>
                    <div className="carousel-card-1">
                        <Carousel itemsToShow={3} pagination={false} showArrows={false} breakPoints={breakPoints}>
                        {Carousel2.map((item, index) =>{
                             return(
                                <div className="image-1">
                                    <img src={item.photo} alt="gallery-01"/>
                                    <div className="image__overlay-1">
                                        <div className="image__title-1 Avenir">{item.title}</div>s
                                    </div>
                                </div>
                              )
                            })}  
                        </Carousel>
                    </div>
                </div>
                <div className="gallery-content-1">
                    <div className="title-green-1 Avenir-medium">WPS EXPEDITION</div>
                    <div className="title-green-2 Avenir-light">By Jue Lalas</div>
                    <div className="carousel-card-1">
                        <Carousel itemsToShow={3} pagination={false} showArrows={false} breakPoints={breakPoints}>
                        {Carousel3.map((item, index) =>{
                             return(
                                <div className="image-1">
                                    <img src={item.photo} alt="gallery-01"/>
                                    <div className="image__overlay-1">
                                        <div className="image__title-1 Avenir">{item.title}</div>
                                    </div>
                                </div>
                              )
                            })}  
                        </Carousel>
                    </div>
                </div>  
            </div>    
         </div>
    )
}

export default GalleryCarousel
