const CoverCard = ({ name, image, url }) => {
    console.log(image)
    return (
        <>
            <h2 className="couple-title">
                {name}
            </h2>
            <a
                href={url}
                className="couple-link"
            >
                <img 
                    src={image}
                    alt={`${name}'s cover with link to their page.`}
                    className='couple-cover'
                ></img>
            </a>
        </>
    )
}

export default CoverCard

