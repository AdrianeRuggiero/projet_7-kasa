import './slideshow.scss'
import ArrowRight from '../../assets/arrow_right.png'
import ArrowLeft from '../../assets/arrow_left.png'
import { useState } from 'react'

function Slideshow({ imageSlideShow }) {

    // State to keep track of the current image index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to display the next slide
    const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % imageSlideShow.length;
        setCurrentIndex(nextIndex);
    };

    // Function to display the previous slide
    const prevSlide = () => {
        const prevIndex = (currentIndex - 1 + imageSlideShow.length) % imageSlideShow.length;
        setCurrentIndex(prevIndex);
    };

    return (
        <section style={{backgroundImage: `url(${imageSlideShow[currentIndex]})`}} className='slide-show'>

            {/* Conditional rendering based on the number of images */}
            {imageSlideShow.length > 1 && (
                <>
                    {/* Button to navigate to the next slide */}
                    <img
                        className='slide-show__arrow slide-show__arrow-right'
                        src={ArrowRight}
                        alt="show next Slideshow"
                        onClick={nextSlide}
                    />
                    {/* Button to navigate to the previous slide */}
                    <img
                        className='slide-show__arrow slide-show__arrow-left'
                        src={ArrowLeft}
                        alt="show previous Slideshow"
                        onClick={prevSlide}
                    />
                    {/* Displaying the current slide number */}
                    <p className='slide-show__count slide-show__count-hide-on-mobile'>{currentIndex + 1} / {imageSlideShow.length}</p>
                </>
            )}
        </section>
    );
}

export default Slideshow;