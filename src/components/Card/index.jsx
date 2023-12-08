import './card.scss'
import { Link } from 'react-router-dom'

// Functional component Card that receives 'id', 'title', and 'cover' as props
function Card({id, title, cover}) {

	return (
		// Link component to navigate to the accommodation details page with the specific 'id'
		<Link to={`/accommodation/${id}`} className="gallery_card">
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
		</Link>
	)
}

export default Card