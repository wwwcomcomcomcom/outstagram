import {Outlet} from "react-router-dom";
import SideBar from "./menuBar/sideBar.tsx";
import {useState} from "react";
import FootBar from "./menuBar/footBar.tsx";

export default function Layout(){
    const [width,setWidth] = useState(window.innerWidth);
    // const [height,setHeight] = useState(window.innerHeight);
    function updateScreenInfo() {
        setWidth(window.innerWidth);
        // setHeight(window.innerHeight);
    }
    addEventListener("resize",updateScreenInfo);

    const menuBar = width > 1000 ? <SideBar/> : <FootBar/>

    return(
        <>
            <Outlet></Outlet>
            {menuBar}
        </>
    )
}