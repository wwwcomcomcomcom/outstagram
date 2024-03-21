import "./sideBar.css"
import InstaIcon from "../icons/instaIcon.tsx";
import HomeIcon from "../icons/homeIcon.tsx";
import SearchIcon from "../icons/searchIcon.tsx";
import CompassIcon from "../icons/compassIcon.tsx";
export default function SideBar() {

    return <div className="sideBar">
        <InstaIcon/>
        <HomeIcon/>
        <SearchIcon/>
        <CompassIcon/>
    </div>
}