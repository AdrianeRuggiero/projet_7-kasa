import './collapse.scss'
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

// Functional component Collapse that takes 'title' and 'content' as props
function Collapse ({ title, content }) {

    // State variable 'open' to track the collapse state, default value is 'false'
    const [open, setOpen] = useState(false);

    // Function to toggle the collapse state
    const changeCollapse = () => {
        setOpen(!open);
    };

    // Function to render content based on whether it's an array or not
    const renderContent = () => {
        if (Array.isArray(content)) {
            // If 'content' is an array, map through it to display paragraphs
            return content.map((item, index) => <p key={index}>{item}</p>);
        }
        // If 'content' is not an array, display it directly
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
            {/* Conditional rendering of content based on the 'open' state */}
            <div className={open ? 'collapse_content' : 'collapse_content_hidden'}>
                {renderContent()}
            </div>
        </div>
    );
};

export default Collapse;