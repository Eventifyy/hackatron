import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const extra = () =>{
    return(
        <div>
            <Skeleton count={5}/>
        </div>
    )
}
export default extra;