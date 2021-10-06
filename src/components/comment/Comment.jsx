export default function Comment({ description, author }) {
    return (
        <div className='Comment'>
            <h4>{author.name}</h4>
            <p>{description}</p>
        </div>
    )
}