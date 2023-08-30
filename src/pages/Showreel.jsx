import '../Styles/Showreel.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'react-image-enlarger'

function ImageZoom({ src }) {
    const [zoomed, setZoomed] = useState(false)
    const [screenOrientation, setScreenOrientation] = useState(
        window.matchMedia('(orientation: portrait)').matches ? 'portrait' : 'landscape'
    );

    useEffect(() => {
        const handleOrientationChange = () => {
            setScreenOrientation(
                window.matchMedia('(orientation: portrait)').matches ? 'portrait' : 'landscape'
            );
        };

        window.addEventListener('orientationchange', handleOrientationChange);

        return () => {
            window.removeEventListener('orientationchange', handleOrientationChange);
        };
    }, []);

    const imageStyles = 
        screenOrientation === 'portrait'
            ? { width: "98%", height: "auto", objectFit: "cover", zIndex: "3"}
            : { width: "98%", height: "auto", aspectRatio: '1/1', objectFit: "cover", zIndex: "3"}

    return (
        <section >
            <Image
                style={imageStyles}
                zoomed={zoomed}
                src={src}
                onClick={() => setZoomed(true)}
                onRequestClose={() => setZoomed(false)}
            />
        </section>
    )
}

function Showreel({ url, name }) {
    const [showReel, setShowReel] = useState([]) 

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const result = await axios(
                    `${import.meta.env.VITE_ELLE_WYSS_PHOTO_API_ENDPOINT}/${url}`, 
                    {withCredentials: true}
                );
    
                setShowReel(result.data[name]);
            }
            catch (error) {
            console.error("Error fetching couples:", error)
            }
        }

        fetchImages();
    }, []);

    return (
        <>
            <h3>{name}</h3>
            <section className='showreel'>
                {showReel.map((image, index) => {
                    return (
                        <>
                            <ImageZoom 
                                src={image}
                                key={index}
                                alt={`${name}'s wedding story, image ${index}`}
                            />
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default Showreel