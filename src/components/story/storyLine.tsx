import styles from "./story.module.css";
import "./story.css";
import Story from "./story.tsx";
import StoryScrollButton from "./storyScrollButton.tsx";
import {getPlatformType} from "../../utils/os.ts";
import { JSX } from "react/jsx-runtime";

export default function StoryLine() {

    function getStories() {
        const array = [];
        for (let i = 0; i < 10; i++) {
            array.push(<Story key={`${i}`}/>);
        }
        return array;
    }

    let buttons:JSX.Element[] = [];
    if(getPlatformType() === "PC"){
        buttons = [
            <StoryScrollButton direction="left" id="storyScrollButtonLeft"/>,
            <StoryScrollButton direction="right" id="storyScrollButtonRight"/>
        ];
    }
    
    return <div className={styles.storyWrapper}>
        {...buttons}
        <div className={styles.storyLine}>
            {...getStories()}
        </div>
    </div>
}