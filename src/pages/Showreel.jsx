import '../Styles/Showreel.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

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
        <section id='showreel'>
            <h3>{name}</h3>
            {showReel.map((image, index) => {
                return (
                    <>
                        <img 
                            src={image}
                            key={index}
                            alt={`${name}'s wedding story, image ${index}`}
                            className='showreel-image'
                        ></img>
                    </>
                )
            })}
        </section>
    )
}

export default Showreel