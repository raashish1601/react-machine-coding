import { useState, useRef, useEffect } from "react";
import "./Typeahead.css";
import { TYPEAHEAD_DATA } from "../../constants/constants";

const Typeahead = () => {
    const [data, setData] = useState(TYPEAHEAD_DATA);
    const [filteredData, setfilteredData] = useState(TYPEAHEAD_DATA);
    const [value, setValue] = useState("");
    const autocompleteRef = useRef(null);

    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleClick = (event) => {
            if (
                autocompleteRef.current &&
                !autocompleteRef.current.contains(event.target)
            ) {
                setShow(false);
            }
        };
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    const debounce = function (fn) {
        let timer;
        return function (...args) {
            if (timer) clearTimeout(timer);
            let context = this;
            timer = setTimeout(() => {
                timer = null;
                fn.apply(context, args);
            }, 500);
        };
    };

    const handleChange = (value) => {
        setValue(value);
        if(value===""){
            setShow(false);
            return;
        }
        const optimised = debounce(fun);
        optimised(value);
    };

    const fun = (value) => {
        const filteredData = data.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
        );
        setfilteredData(filteredData);
        setShow(true);
    };

    const handleClick = (value) => {
        setValue(value);
        setShow(false);
    };
    return (
        <>
            <div className="autocomplete" ref={autocompleteRef}>
                <input
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                    type="text"
                    placeholder="Type to Search"
                    // onFocus={() => setShow(true)}
                />
                {show && (
                    <ul>
                        {filteredData.map((row) => {
                            return <li onClick={() => handleClick(row)}>{row}</li>;
                        })}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Typeahead;