import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <p className="status-error">STATUS <span>404</span> PAGE NOT FOUND!</p>
            <Link className="Back-page" to={"/"}>Back to the Homepage...</Link>
        </div>
     );
}
 
export default NotFound;