import './Comment.css'

export default function Comment({ description, author }) {
    return (
        <div className='Comment'>
            <img src={author.image} alt={author.name} />
            <div className='Comment__info'>
                <h4>{author.name}:</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}