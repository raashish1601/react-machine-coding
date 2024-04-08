import { useEffect, useState } from "react";
import Carousel from "./Caraousel";
import "./Caraousel.css";

const CaraouselWrapper = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchImages = async (imgLimit) => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/photos?_limit=${imgLimit}`
            );
            const data = await response.json();
            setImages(data);
        } catch (error) {
            console.error("Error fetching images:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages(8);
    }, []);

    return (
        <div className="carousel-container">
            <Carousel
                images={images}
                isLoading={loading}
                onImgClick={(image, index) => { }}
                imgPerSlide={2}
                imageLimit={4}
                customPrevButton={(onClick) => (
                    <button
                        className="btn prev"
                        style={{ background: "red" }}
                        onClick={onClick}
                    >
                        Prev
                    </button>
                )}
                customNextButton={(onClick) => (
                    <button
                        className="btn next"
                        style={{ background: "blue" }}
                        onClick={onClick}
                    >
                        Next
                    </button>
                )}
            />
        </div>
    );
};

export default CaraouselWrapper;