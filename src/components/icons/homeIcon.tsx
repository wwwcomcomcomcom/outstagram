import {GoHome, GoHomeFill} from "react-icons/go";
import {useLocation} from "react-router-dom";

export default function HomeIcon(){

    function redirectToHome() {
        location.assign("/");
    }

    function setScrollToDefault(){
        window.scrollTo({top:0,behavior:"smooth"});
    }

    if(useLocation().pathname === "/"){
        return <GoHomeFill id="homeButton" className="menuIcon" size="2rem" onClick={setScrollToDefault}/>
    }else{
        return <GoHome id="homeButton" className="menuIcon" size="2rem" onClick={redirectToHome}/>
    }
}