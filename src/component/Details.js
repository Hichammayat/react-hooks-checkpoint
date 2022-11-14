const Details = (props) =>{
    
    return(
        
        <div className="details-movies">
            <div className="image-movie">
                <img src={props.image}></img>

            </div>
            <div className="info-movie">
                <div className="title-movie">
                    <h1>{props.movieTitle}</h1>
                    <h1>7/10</h1>
                </div>
                <div className="description-movie">
                <p>Here goes some quick info <br /> about  what you will be watching. <br /> 
               On this card will go everything <br /> about the movie. <br />
            </p>

                </div>


            </div>

        </div>
    )
}

export default Details;