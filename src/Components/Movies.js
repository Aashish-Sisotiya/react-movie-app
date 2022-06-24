import React, { Component } from 'react'
// import { movies } from './getMovies'
import { Link } from "react-router-dom";
import axios from 'axios';

export default class Movies extends Component {
    constructor() {
        super();
        this.state = {
            hover: '',
            parr: [1],
            currPage: 1,
            movies: [],
            favourites: []
        }
    }
    async componentDidMount() {
        //side effect
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=67f62b2bb6b291d7a43a0c2a694a5ea4&language=en-US&page=${this.state.currPage}`);
        let data = res.data;
        // console.log(data);
        this.setState({
            movies: [...data.results]
        })
        // console.log("mounting done");

    }
    changeMovies = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=67f62b2bb6b291d7a43a0c2a694a5ea4&language=en-US&page=${this.state.currPage}`);
        let data = res.data;

        this.setState({
            movies: [...data.results]
        })
    }

    handleRight = () => {
        let tempArr = [];
        for (let i = 1; i <= this.state.parr.length + 1; i++) {
            tempArr.push(i);
        }
        this.setState({
            parr: [...tempArr],
            currPage: this.state.currPage + 1
        }, this.changeMovies)
        // this.changeMovies(); this will not work because setState function is a async function, so we need to provide a callback function to setstate function so that after the execution of setstate the function will run
    }

    handleLeft = () => {
        if (this.state.currPage !== 1) {
            this.setState({
                currPage: this.state.currPage - 1
            }, this.changeMovies)
        }
    }

    handleClick = (value) => {
        if (value !== this.state.currPage) {
            this.setState({
                currPage: value
            }, this.changeMovies)
        }
    }

    handleFavourites = (movie) => {
        let oldData = JSON.parse(localStorage.getItem("movies-app") || "[]");
        if (this.state.favourites.includes(movie.id)) {
            oldData = oldData.filter((m) => m.id !== movie.id);
        }
        else {
            oldData.push(movie);
        }
        localStorage.setItem("movies-app", JSON.stringify(oldData));
        this.handleFavouritesState();
        console.log(oldData);
    }
    handleFavouritesState = () => {
        let oldData = JSON.parse(localStorage.getItem("movies-app") || "[]");
        let temp = oldData.map((movie) => movie.id);
        this.setState({
            favourites: [...temp]
        })

    }


    render() {
        // let movie = movies.results;
        // console.log("render");
        return (
            <>
                {
                    this.state.movies.length === 0 ?
                        <div className="spinner-border text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> :
                        <div>
                            <h3 className='text-center'><strong>Trending</strong></h3>
                            <div className='movies-list'>
                                {
                                    this.state.movies.map((movieObj) => (

                                        <div className="card movies-card " onMouseEnter={() => this.setState({ hover: movieObj.id })} onMouseLeave={() => this.setState({ hover: '' })} >

                                            <Link to={'/moviedetails'} state={{ movieObj }}> <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt={movieObj.title} className="card-img-top movies-img" /></Link>
                                            {/* <div className="card-body"> */}
                                            <h4 className="card-title movies-title">{movieObj.original_title}</h4>
                                            {/* <p class="card-text movies-text"> {movieObj.overview}</p> */}
                                            <div className='button-wrapper' style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                                                {
                                                    this.state.hover === movieObj.id &&
                                                    <a  className="btn btn-primary movies-button" onClick={() => this.handleFavourites(movieObj)}>{this.state.favourites.includes(movieObj.id) ? "Remove from Favourite" : "Add to Favourite"} </a>
                                                }
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item"><a className="page-link" href='#/' onClick={this.handleLeft} >Previous</a></li>
                                        {
                                            this.state.parr.map((value) => (
                                                <li className="page-item"><a className="page-link" href='#/' onClick={() => this.handleClick(value)} >{value}</a></li>
                                            ))
                                        }


                                        <li className="page-item"><a className="page-link" href='#/' onClick={this.handleRight}>Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                }

            </>
        )
    }
}


