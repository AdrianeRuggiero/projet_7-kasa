import './banner.scss'

// Functional component Banner which receives 'image' and 'texte' as props
function Banner({image, texte}) {
    return(
		// Structure of the Banner component
        <div className="banner">
            <img className="banner_img" src={image} alt="Banner"/>
            <span className="banner_txt">{texte}</span>
        </div>
    );
}


export default Banner