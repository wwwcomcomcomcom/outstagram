import {useLocation} from "react-router-dom";
import {FaCompass, FaRegCompass} from "react-icons/fa";

export default function CompassIcon() {
    function redirectToExplorer() {
        location.assign("/explorer");
    }
    if(useLocation().pathname === "/explorer"){
        return <FaCompass id="explorerButton" className="menuIcon" size="2rem" onClick={redirectToExplorer}/>
    }else{
        return <FaRegCompass id="explorerButton" className="menuIcon" size="2rem" onClick={redirectToExplorer}/>
    }
}