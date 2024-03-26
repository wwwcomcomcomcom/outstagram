import {IoChatbubbleOutline} from "react-icons/io5";
import {IconBaseProps} from "react-icons";

export default function CommentButton(props:IconBaseProps) {
    return <IoChatbubbleOutline size="2rem" style={{transform:"scaleX(-1)"}} {...props}/>
}