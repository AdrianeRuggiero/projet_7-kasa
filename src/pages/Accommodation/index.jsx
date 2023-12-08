import { useEffect, useState } from "react"
import { useParams, Navigate } from "react-router-dom";
import logements from '../../data/logement'
import Header from "../../components/Header";
import Slideshow from "../../components/Slideshow"
import AccommodationSection from '../../components/AccommodationSection';
import Footer from "../../components/Footer";


function Accommodation() {
    // State to manage slideshow images
    const [imageSlideShow, setImageSlideShow] = useState([]);

    // Get the 'id' from the URL params
    const { id } = useParams();

    // Find the accommodation details based on the 'id'
    const dataCurrentAccommodation = logements.find((logement) => logement.id === id);
  
    // Update the slideshow images when the accommodation data changes
    useEffect(() => {
      if (dataCurrentAccommodation) {
        setImageSlideShow(dataCurrentAccommodation.pictures || []);
      }
    }, [dataCurrentAccommodation]);
  
    // If accommodation data is not found, navigate to an error page
    if (!dataCurrentAccommodation) {
      return <Navigate to="*" />;
    }
  
    return (
      <>
        <Header />
        <Slideshow imageSlideShow={imageSlideShow} />
        <AccommodationSection logementData={dataCurrentAccommodation} />
        <Footer />
      </>
    );
  }
  
  export default Accommodation;