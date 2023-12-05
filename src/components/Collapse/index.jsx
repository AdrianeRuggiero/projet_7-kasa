import './collapse.scss'
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

/* export default function Collapse({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="collapse" >
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>
                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </>
    )
}*/

import React from 'react';

const Collapse = ({ title, content }) => {
    const [toggle, setToggle] = useState(false);

    const toggleCollapse = () => {
        setToggle(!toggle);
    };

    const renderContent = () => {
        if (Array.isArray(content)) {
            return content.map((item, index) => <p key={index}>{item}</p>);
        }
        return content;
    };

    return (
        <div className="collapse">
            <h3 className="collapse_title" onClick={toggleCollapse}>
                {title}
                <img
                    className={`arrow ${toggle ? 'arrow_up' : 'arrow_down'}`}
                    src={arrow}
                    alt="show content"
                />
            </h3>
            <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                {renderContent()}
            </div>
        </div>
    );
};

export default Collapse;