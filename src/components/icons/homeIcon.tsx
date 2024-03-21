import {GoHome, GoHomeFill} from "react-icons/go";
import {useLocation} from "react-router-dom";

export default function HomeIcon(){

    function redirectToHome() {
        location.assign("/");
    }
    if(useLocation().pathname === "/"){
        return <GoHomeFill id="homeButton" className="menuIcon" size="2rem" onClick={redirectToHome}/>
    }else{
        return <GoHome id="homeButton" className="menuIcon" size="2rem" onClick={redirectToHome}/>
    }
}