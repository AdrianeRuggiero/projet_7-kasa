import './accommodationSection.scss'
import React from 'react';
import Collapse from '../../components/Collapse';
import whiteStar from '../../assets/white-star.png';
import redStar from '../../assets/red_star.png';

// Function to render tags based on provided data
function renderTags(tags) {
  return tags.map((tag, index) => <button key={index}>{tag}</button>);
}

// Function to render star icons based on provided rating
function renderStars(rating) {
  return [...Array(5)].map((star, index) => {
    const ratingValue = index + 1;
    return (
      <img key={index} src={ratingValue <= rating ? redStar : whiteStar} alt="star" />
    );
  });
}

// Component to display accommodation details based on logementData
function AccommodationSection({ logementData }) {
  const { title, location, tags, host, description, equipments, rating } = logementData;

  return (
    <div className="accommodation">
      <div className="accommodation_content">
        <div className="accommodation_content_infos">
          <h1>{title}</h1>
          <p>{location}</p>
          <div>{renderTags(tags)}</div>
        </div>
        <div className="accommodation_content_host">
          <div>
            <div className='accommodation_content_host_name'>
              <span>{host.name.split(' ')[0]}</span>
              <span>{host.name.split(' ')[1]}</span>
            </div>
            <img src={host.picture} alt="host" />
          </div>
          <div className="accommodation_content_host_stars">
            {renderStars(rating)}
          </div>
        </div>
      </div>
      <div className="accommodation_collapse">
        <div className="accommodation_collapse_item">
          <Collapse title={'Description'} content={description} />
        </div>
        <div className="accommodation_collapse_item">
          <Collapse title={'Equipment'} content={equipments} />
        </div>
      </div>
    </div>
  );
}

export default AccommodationSection;