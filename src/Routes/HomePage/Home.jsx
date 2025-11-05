import Slider from 'react-slick';
import '../HomePage/Home.css'
import { DUMMY_PAGAE_PIC } from '../../Library/pagePic';

function Home() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1200,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    DUMMY_PAGAE_PIC.map((item) => <div key={item.id}>
                        <img src={item.img} alt={item.id} />
                    </div>)
                }
            </Slider>
        </div>
    )
}

export default Home
