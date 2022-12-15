import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [targetJson, setTargetJson] = useState();
    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then(response => response.json())
        .then(json => {
            setTargetJson(json);
            setLoading(false);
            console.log(targetJson);
        })
    }, [])

    return <div>
        {loading ? <h1>Loading... please wait a minute</h1> : 
        <div>
            <h1>{ targetJson.data.movie.title_long }</h1>
            <img src={ targetJson.data.movie.medium_cover_image } alt='this is movie img'/>
            <a href={targetJson.data.movie.url} target='_blank'>영화 정보 홈 페이지 방문하기</a>            
        </div>
        }
    </div>
}

export default Detail;