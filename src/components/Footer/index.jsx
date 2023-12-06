import './footer.scss'
import logo from '../../assets/LOGO-footer.png'

function Footer() {
   
    const dateYear = new Date().getFullYear();
	return (
		<footer className='footer'>
			<img src={logo} alt="Kasa - agence de location d'appartements entre particuliers" />
			<p className='footer_copyright'>© {dateYear} Kasa. All rights reserved</p>
		</footer>
	)
}

export default Footer