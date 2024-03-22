import React, { useRef, useEffect, useState } from 'react';
import "./ElementsInViewPort.css";

const ElementsInViewPort = () => {
  const inViewPort = (elm) => {
    if (!elm) return false;
    const elmDim = elm.getBoundingClientRect();
    const viewHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewWidth = window.innerWidth || document.documentElement.clientWidth;
    return (
      elmDim.top >= 0 && elmDim.left >= 0 && elmDim.right <= viewWidth && elmDim.bottom <= viewHeight
    );
  };

  const detect = () => {
    const blocks = document.querySelectorAll(".blocks");
    blocks.forEach((elm) => {
      if (inViewPort(elm)) {
        elm.style.backgroundColor = "green";
      } else {
        elm.style.backgroundColor = "red";
      }
    });
  };

  const debouncedDetect = () => {
    let timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(detect, 1000);
    };
  };

  useEffect(() => {
    const handleScroll = debouncedDetect();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      {[...Array(27).keys()].map((index) => (
        <div className="blocks" key={index}>{index + 1}</div>
      ))}
    </div>
  );
};

export default ElementsInViewPort;
