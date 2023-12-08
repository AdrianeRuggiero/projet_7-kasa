import './about.scss';
import Header from "../../components/Header";
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import Footer from '../../components/Footer';
import aboutDatas from '../../data/about';
import IMG from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'

function About() {

    // Function to render collapse items based on the 'aboutDatas' data
    function renderCollapseItems(){
        return aboutDatas.map(data => (
            // Each collapse item is rendered using the 'Collapse' component
            <div key={data.id} className="about_main_collapse">
                <Collapse style={{margin:'30px 0'}}  title={data.title} content={data.content} />
            </div>
        ));
    };

    return (
        <div>
            <Header />
            <Banner image={IMG} texte=""/>
            <div className='about_main'>
                {renderCollapseItems()}
            </div>
            <Footer />
        </div>
    );
}

export default About