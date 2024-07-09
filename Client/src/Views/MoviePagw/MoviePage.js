import React from 'react'
import "./MoviePage.css"
import Navbar from '../../components/NavBar/navBar'


const MoviePage = () => {
    return (
        <div>


            <div className="MasterContainerMoviePage">
                <div className="MoviePageNavBarContainer">
                    <Navbar />
                </div>
                <div className="DarkOverlay">

                    <div className="ImageAndRatingContainer">
                        <div className="ImageDivContainer">
                            <img src="./images/jawan.jpg" style={{ height: "400px", width: "350px", borderRadius: "3%" }} />
                        </div>

                        <div className="ImageDivContentContainer">
                            <h1>Jawan</h1>

                            <div className="RatingDisplayContainer">
                                4.2 (55 Votes)
                            </div>

                            <div className="LanguagesContainer">
                                Hindi,English
                            </div>

                            <div className="MinorDetailsContainer">
                                Horror,Thriller - 2024
                            </div>

                            <button className="RateNowButton">Rate now!</button>
                        </div>
                    </div>


                </div>



            </div>
            <div className="AboutMovieSection">
                <h1>About movie</h1>    
            </div>
        </div>
    )
}

export default MoviePage
