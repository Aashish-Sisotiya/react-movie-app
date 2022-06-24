import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


export default function MovieDetails() {
    const location = useLocation()
    const data = location.state;
    const [myCurrMovie, setMovie] = useState(data);
    console.log(data);



    return (
        <div className='CurrMovie'>

            <div class="cardCurrMovie" style={{ width: '60vw', }}>
                <div class="card-body">
                    <h2 class="card-title" >{myCurrMovie.movieObj.title}</h2>

                    <img src={`https://image.tmdb.org/t/p/original${myCurrMovie.movieObj.poster_path}`} style={{ width: '60vw', height: '80vh' }} class="card-img-top" alt="..." />
                    <p style={{ marginTop: '2.5rem', marginLeft: '1.1rem' }} class="card-text">{myCurrMovie.movieObj.overview}</p>
                </div>
                {/* <img src={`https://image.tmdb.org/t/p/original${myCurrMovie.movieObj.backdrop_path}`} class="card-img-top" alt="..." /> */}

                <ul class="list-group list-group-flush">

                    <li class="list-group-item"><strong>Release date</strong> {myCurrMovie.movieObj.release_date}</li>
                    <li class="list-group-item"><strong>Vote Count</strong> {myCurrMovie.movieObj.vote_count}</li>
                </ul>
            </div>
        </div>

    )
}
