import { Link } from 'react-router-dom';

function Movie({id, title, medium_cover_image, summary}) {
    return <div key={id}>
        <h2>{title}</h2>
        <Link to={`/movie/${id}`}><img src={medium_cover_image} alt='img'/></Link>
        <p>{summary}</p>
        <hr />
    </div>
}

export default Movie;