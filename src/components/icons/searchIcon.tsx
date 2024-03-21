import {useLocation} from "react-router-dom";
import {IoIosSearch} from "react-icons/io";
import {FaSearch} from "react-icons/fa";

export default function SearchIcon() {

    function redirectToSearch() {
        location.assign("/search");
    }
    if(useLocation().pathname === "/search"){
        return <FaSearch id="searchButton" className="menuIcon" size="2rem" onClick={redirectToSearch}/>
    }else{
        return <IoIosSearch id="searchButton" className="menuIcon" size="2rem" onClick={redirectToSearch}/>
    }
}