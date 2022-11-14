
import { useNavigate  } from 'react-router-dom';
const WatchNow=()=>{
    const navigate = useNavigate()
    return(
        <>
        
        <button onClick={()=> navigate('/Details')}>Watch Now   <i class="fa-solid fa-eye"></i>
        </button>
        
        </>
    )
}
export default WatchNow;