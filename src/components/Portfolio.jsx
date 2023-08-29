
import '../Styles/Portfolio.css'

import CoverCard from './CoverCard'

function Portfolio({ couples }) {
    

    return (
        <section id='portfolio'>
            <h2 id='portfolio-title'>Portfolio</h2>
            <img id='portfolio-title-underline' src='../src/assets/Logo/underline.svg'></img>
            {couples.map((couple, index) => {
                const { name, url, cover_image } = couple
                return (
                    <>
                        <CoverCard 
                            name={name}
                            image={cover_image}
                            url={url}
                            key={index}
                        />
                    </>
                )
        })}
        </section>
    )
}

export default Portfolio