import './slideshow.scss'
import ArrowRight from '../../assets/arrow_right.png'
import ArrowLeft from '../../assets/arrow_left.png'
import { useState } from 'react'

function Slideshow({ imageSlideShow }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % imageSlideShow.length;
        setCurrentIndex(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex = (currentIndex - 1 + imageSlideShow.length) % imageSlideShow.length;
        setCurrentIndex(prevIndex);
    };

    return (
        <section style={{backgroundImage: `url(${imageSlideShow[currentIndex]})`}} className='slide-show'>
            {imageSlideShow.length > 1 && (
                <>
                    <img
                        className='slide-show__arrow slide-show__arrow-right'
                        src={ArrowRight}
                        alt="show next Slideshow"
                        onClick={nextSlide}
                    />
                    <img
                        className='slide-show__arrow slide-show__arrow-left'
                        src={ArrowLeft}
                        alt="show previous Slideshow"
                        onClick={prevSlide}
                    />
                    <p className='slide-show__count slide-show__count-hide-on-mobile'>{currentIndex + 1} / {imageSlideShow.length}</p>
                </>
            )}
        </section>
    );
}

export default Slideshow;