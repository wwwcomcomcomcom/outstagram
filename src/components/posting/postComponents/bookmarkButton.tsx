import {IoBookmark, IoBookmarkOutline} from "react-icons/io5";
import {useState} from "react";
import {IconBaseProps} from "react-icons";

export default function BookmarkButton(props:IconBaseProps) {

    const [checked, setChecked] = useState(false);

    const commonProps ={
        size:"2rem",
        onClick:()=>{
            setChecked(!checked);
        }
    }

    return checked ? <IoBookmark {...commonProps} {...props}/> : <IoBookmarkOutline {...commonProps} {...props}/>;
}