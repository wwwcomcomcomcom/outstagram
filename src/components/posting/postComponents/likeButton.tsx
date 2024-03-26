import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {useState} from "react";
import {IconBaseProps} from "react-icons";

export default  function LikeButton(props:IconBaseProps){

    const [checked, setChecked] = useState(false);

    const commonProps = {
        size:"2rem",
        onClick:()=>{
            setChecked(!checked);
        }
    }

    return checked ? <FcLike {...commonProps} {...props}/> : <FcLikePlaceholder {...commonProps} {...props}/>;
}