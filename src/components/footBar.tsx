import "./footBar.css";
import HomeIcon from "./icons/homeIcon.tsx";
import SearchIcon from "./icons/searchIcon.tsx";
import CompassIcon from "./icons/compassIcon.tsx";
export default function FootBar() {
    return <div className="footBar">
        <HomeIcon/>
        <SearchIcon/>
        <CompassIcon/>
    </div>;
}