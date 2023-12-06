import './accommodation.scss'
import { useEffect, useState } from "react"
import { useParams, Navigate } from "react-router-dom";
import logements from '../../data/logement'
import Header from "../../components/Header";
import Slideshow from "../../components/Slideshow"
import Footer from "../../components/Footer";
import Collapse from '../../components/Collapse';
import whiteStar from '../../assets/white-star.png';
import redStar from '../../assets/red_star.png';


function Accommodation() {
  const [imageSlideShow, setImageSLideShow] = useState([]);
  const { id } = useParams();
  const dataCurrentAccommodation = logements.find(logement => logement.id === id);

  useEffect(() => {
      if (dataCurrentAccommodation) {
          setImageSLideShow(dataCurrentAccommodation.pictures || []);
      }
  }, [dataCurrentAccommodation]);

  const renderTags = () => {
      return dataCurrentAccommodation?.tags?.map((tag, index) => (
          <button key={index}>{tag}</button>
      ));
  };

  const renderStars = () => {
      const rating = dataCurrentAccommodation?.rating || 0;
      return [...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
              <img key={index} src={ratingValue <= rating ? redStar : whiteStar} alt="star" />
          );
      });
  };

  if (!dataCurrentAccommodation) {
    return <Navigate to="*" />;
}


  return (
      <>
          <Header />
          <Slideshow imageSlideShow={imageSlideShow} />
          <div className="accommodation">
              <div className="accommodation_content">
                  <div className="accommodation_content_infos">
                      <h1>{dataCurrentAccommodation?.title}</h1>
                      <p>{dataCurrentAccommodation?.location}</p>
                      <div>{renderTags()}</div>
                  </div>
                  <div className="accommodation_content_host">
                      <div>
                          <div className='accommodation_content_host_name'>
                              <span>{dataCurrentAccommodation?.host?.name?.split(' ')[0]}</span>
                              <span>{dataCurrentAccommodation?.host?.name?.split(' ')[1]}</span>
                          </div>
                          <img src={dataCurrentAccommodation?.host?.picture} alt="host" />
                      </div>
                      <div className="accommodation_content_host_stars">
                          {renderStars()}
                      </div>
                  </div>
              </div>
              <div className="accommodation_collapse">
                  <div className="accommodation_collapse_item">
                      <Collapse title={'Description'} content={dataCurrentAccommodation?.description} />
                  </div>
                  <div className="accommodation_collapse_item">
                      <Collapse title={'Équipements'} content={dataCurrentAccommodation?.equipments} />
                  </div>
              </div>
          </div>
          <Footer />
      </>
  );
}

export default Accommodation;