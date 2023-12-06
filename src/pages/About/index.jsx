import './about.scss';
import Header from "../../components/Header";
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import Footer from '../../components/Footer';
import aboutDatas from '../../data/about';
import IMG from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'

function About() {
    function renderCollapseItems(){
        return aboutDatas.map(data => (
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