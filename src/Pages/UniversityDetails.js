import '../App.css';
import {useLocation} from "react-router-dom";

function UniversityDetails(){
   const location= useLocation();


    return(
        <div className="uni-details">
            <div>
            <h2 className="list-heading">University Details</h2>
            <div className="university">            
                    <h2 className="card-name">{location.state.name}</h2>
                    <h4 className="uni-info">University Information</h4>
                    <ol className="card-list">
                        <li>
                        Country Code:{" "}
                            <span>{location.state.alpha_two_code}</span>
                        </li>
                        <li>
                        University URL: <span>{location.state.web_pages}</span>
                        </li>
                        <li>
                        Country: <span>{location.state.country}</span>
                        </li>
                        <li>
                        University Domain: <span>{location.state.domains}</span>
                        </li>
                    </ol>            
        </div>
        </div>
    </div>
    )
}
export default UniversityDetails;