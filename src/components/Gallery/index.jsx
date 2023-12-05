import './gallery.scss'
import logements from '../../data/logement'
import Card from '../Card'

function Gallery() {

    return (
        <div className='home_gallery'>
            {logements.map(logement => {
                return (
                    <Card
                        key={logement.id}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                )
            })}
        </div>
    )
}

export default Gallery