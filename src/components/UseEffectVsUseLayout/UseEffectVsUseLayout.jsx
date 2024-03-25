import { useState, useLayoutEffect, useEffect } from "react";

export default function UseEffectVsUseLayout() {
    const [show, setShow] = useState(false);
    const popup = useRef();
    const button = useRef();

    // use-layout-effect is synchronous, it runs between when react calculates the dom and paints it to the browser
    useLayoutEffect(() => {
        if (popup.current == null || button.current == null) return;
        const { bottom } = button.current.getBoundingClientRect();
        popup.current.style.top = `${bottom + 25}px`;
    }, [show]);


    // use-effect is asynchronous, it do not blocks the dom to execute 
    // useEffect(() => {
    //     if (popup.current == null || button.current == null) return
    //     const { bottom } = button.current.getBoundingClientRect();
    //     popup.current.style.top = `${bottom + 25}px`;
    // }, [show]);

    return (
        <>
            <button ref={button} onClick={() => setShow(prev => !prev)}>
                Click Here
            </button>
            {show && (
                <div style={{ position: "absolute" }} ref={popup}>
                    This is a popup
                </div>
            )}
        </>
    )
}

/*
use-layout-effect should be used when some dom calculations are being made
*/