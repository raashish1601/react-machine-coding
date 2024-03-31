import { useEffect, useState } from "react";
import "./Accordian.css";

const Accordion = ({ title, info, id, indx }) => {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow((prev) => !prev);
    };

    useEffect(() => {
        setShow(indx === 0 ? true : false);
    }, []);
    
    return (
        <>
            <div key={id} className="accordion">
                <div className="accordion-title">
                    <h3>{title}</h3>
                    <button onClick={toggle} className="accordion-icon">
                        {show ? "-" : "+"}
                    </button>
                </div>
                {show && <p className="accordion-info">{info}</p>}
            </div>
        </>
    );
};

export default Accordion;