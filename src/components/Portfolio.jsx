
import '../Styles/Portfolio.css'

import CoverCard from './CoverCard'

function Portfolio({ couples }) {
    

    return (
        <section id='portfolio-links'>
            {couples.map((couple) => {
                const { name, image, url } = couple
                return (
                    <>
                        <img src='/home/mike/software_dev/eli_website/elle_wyss_photo_be/assets/weddings/Tom and Rebecca/Cover/cover.jpg'></img>
                        <CoverCard 
                            name={name}
                            image={image}
                            url={url}
                            key={name}
                        />
                    </>
                )
        })}
        </section>
    )
}

export default Portfolio