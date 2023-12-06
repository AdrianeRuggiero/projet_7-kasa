import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import Footer from '../../components/Footer'
import IMG from '../../assets/IMG.png'

function Home() {
	return (
		<div className='home'>
			<Header />
			<Banner image={IMG} texte="Chez vous, partout et ailleurs"/>
      		<Gallery />
			<Footer />
		</div>
	)
}
  
  export default Home