import {IconBaseProps} from "react-icons";
import {IoMdArrowDropleftCircle, IoMdArrowDroprightCircle} from "react-icons/io";

interface StoryScrollButtonProps extends IconBaseProps{
    direction:"left"|"right"
}

export default function StoryScrollButton(props:StoryScrollButtonProps){
    if(props.direction === "left"){
        return <IoMdArrowDropleftCircle {...props} size="1.5rem"/>
    } else {
        return <IoMdArrowDroprightCircle {...props} size="1.5rem"/>
    }
}