import './collapse.scss'
import arrow from '../../assets/arrow.png';
import { useState } from 'react';


function Collapse ({ title, content }) {
    const [open, setOpen] = useState(false);

    const changeCollapse = () => {
        setOpen(!open);
    };

    const renderContent = () => {
        if (Array.isArray(content)) {
            return content.map((item, index) => <p key={index}>{item}</p>);
        }
        return content;
    };

    return (
        <div className="collapse">
            <h3 className="collapse_title" onClick={changeCollapse}>
                {title}
                <img
                    className={`arrow ${open ? 'arrow_up' : 'arrow_down'}`}
                    src={arrow}
                    alt="arrow for content"
                />
            </h3>
            <div className={open ? 'collapse_content' : 'collapse_content_hidden'}>
                {renderContent()}
            </div>
        </div>
    );
};

export default Collapse;