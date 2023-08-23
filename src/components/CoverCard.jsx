const CoverCard = ({ name, image, url }) => {
    return (
        <>
            <a
                href={url}
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

