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


function Accomodation() {
  const [imageSlideShow, setImageSLideShow] = useState([]);
  const { id } = useParams();
  const dataCurrentAccomodation = logements.find(logement => logement.id === id);

  useEffect(() => {
      if (dataCurrentAccomodation) {
          setImageSLideShow(dataCurrentAccomodation.pictures || []);
      }
  }, [dataCurrentAccomodation]);

  const renderTags = () => {
      return dataCurrentAccomodation?.tags?.map((tag, index) => (
          <button key={index}>{tag}</button>
      ));
  };

  const renderStars = () => {
      const rating = dataCurrentAccomodation?.rating || 0;
      return [...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
              <img key={index} src={ratingValue <= rating ? redStar : whiteStar} alt="star" />
          );
      });
  };

  if (!dataCurrentAccomodation) {
    return <Navigate to="*" />;
}


  return (
      <>
          <Header />
          <Slideshow imageSlideShow={imageSlideShow} />
          <div className="accomodation">
              <div className="accomodation_content">
                  <div className="accomodation_content_infos">
                      <h1>{dataCurrentAccomodation?.title}</h1>
                      <p>{dataCurrentAccomodation?.location}</p>
                      <div>{renderTags()}</div>
                  </div>
                  <div className="accomodation_content_host">
                      <div>
                          <div className='accomodation_content_host_name'>
                              <span>{dataCurrentAccomodation?.host?.name?.split(' ')[0]}</span>
                              <span>{dataCurrentAccomodation?.host?.name?.split(' ')[1]}</span>
                          </div>
                          <img src={dataCurrentAccomodation?.host?.picture} alt="host" />
                      </div>
                      <div className="accomodation_content_host_stars">
                          {renderStars()}
                      </div>
                  </div>
              </div>
              <div className="accomodation_collapse">
                  <div className="accomodation_collapse_item">
                      <Collapse title={'Description'} content={dataCurrentAccomodation?.description} />
                  </div>
                  <div className="accomodation_collapse_item">
                      <Collapse title={'Équipements'} content={dataCurrentAccomodation?.equipments} />
                  </div>
              </div>
          </div>
          <Footer />
      </>
  );
}

export default Accomodation;