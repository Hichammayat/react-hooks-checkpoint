import WatchNow from "./WatchNow"

const Carte = ({element}) =>{
    
    return(
    
          <div className="card">
            <div className='top-card'>
              <img src={element.image}></img>
            </div>
            <div className='info-card'>
              <h2>{element.title} </h2>
              <p>{element.description}</p>
            
            </div>
            <div className='button-card'>
              <WatchNow/>
              
            </div>
          </div>
    
    )
}
Carte.defaultProps = {
    element :{
        title : "this is a movie"
    }
}


export default Carte